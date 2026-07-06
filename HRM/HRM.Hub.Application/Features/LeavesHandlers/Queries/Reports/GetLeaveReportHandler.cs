using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.Reports;

public class GetLeaveReportHandler : IRequestHandler<GetLeaveReportQuery, Response<LeaveReportResult>>
{
    private readonly IBaseRepository<Leaves> _leavesRepository;
    private readonly IBaseRepository<LeavesBalance> _balanceRepository;

    public GetLeaveReportHandler(
        IBaseRepository<Leaves> leavesRepository,
        IBaseRepository<LeavesBalance> balanceRepository)
    {
        _leavesRepository = leavesRepository;
        _balanceRepository = balanceRepository;
    }

    public async Task<Response<LeaveReportResult>> Handle(GetLeaveReportQuery request, CancellationToken cancellationToken)
    {
        var result = request.ReportType switch
        {
            LeaveReportType.LeaveBalance => await GetLeaveBalanceReport(request, cancellationToken),
            LeaveReportType.CurrentLeave => await GetCurrentLeaveReport(request, cancellationToken),
            LeaveReportType.ExpiredLeave => await GetExpiredLeaveReport(request, cancellationToken),
            LeaveReportType.LeaveByType => await GetLeaveByTypeReport(request, cancellationToken),
            LeaveReportType.LeaveByDepartment => await GetLeaveByDepartmentReport(request, cancellationToken),
            LeaveReportType.LeaveByDirectorate => await GetLeaveByDirectorateReport(request, cancellationToken),
            LeaveReportType.LeaveByPeriod => await GetLeaveByPeriodReport(request, cancellationToken),
            LeaveReportType.EmployeesOnLeaveNow => await GetEmployeesOnLeaveNowReport(request, cancellationToken),
            LeaveReportType.LeavePromotionImpact => await GetLeavePromotionImpactReport(request, cancellationToken),
            LeaveReportType.LeaveAllowanceImpact => await GetLeaveAllowanceImpactReport(request, cancellationToken),
            _ => new LeaveReportResult { ReportType = request.ReportType }
        };

        result.ReportType = request.ReportType;
        return SuccessMessage.Get.ToSuccessMessage(result);
    }

    private async Task<LeaveReportResult> GetLeaveBalanceReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = _balanceRepository.GetQueryable()
            .Where(x => !x.IsDeleted);

        if (request.EmployeeId.HasValue)
            query = query.Where(x => x.Id == request.EmployeeId.Value);

        var items = await query.Select(x => new LeaveReportItem
        {
            EmployeeId = x.Id,
            EmployeeName = x.Employee.FullName,
            JobCode = x.Employee.JobCode,
            AnnualBalance = x.AnnualBalance,
            CarriedOverBalance = x.CarriedOverBalance,
            EarnedBalance = x.EarnedBalance,
            UsedBalance = x.UsedBalance,
            RemainingBalance = x.AnnualBalance + x.CarriedOverBalance + x.EarnedBalance - x.UsedBalance
        }).ToListAsync(ct);

        return new LeaveReportResult { Items = items, TotalCount = items.Count };
    }

    private async Task<LeaveReportResult> GetCurrentLeaveReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var today = DateOnly.FromDateTime(DateTime.Now);
        var query = BuildBaseLeaveQuery()
            .Where(x => x.LeaveStatusId == LeaveStatus.Active && !x.IsDeleted);

        if (request.TypeOfLeaveId.HasValue)
            query = query.Where(x => x.TypeOfLeaveId == request.TypeOfLeaveId.Value);

        var items = await SelectLeaveItems(query, ct);
        return new LeaveReportResult { Items = items, TotalCount = items.Count };
    }

    private async Task<LeaveReportResult> GetExpiredLeaveReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery()
            .Where(x => x.LeaveStatusId == LeaveStatus.Expired && !x.IsDeleted);

        if (request.TypeOfLeaveId.HasValue)
            query = query.Where(x => x.TypeOfLeaveId == request.TypeOfLeaveId.Value);

        var items = await SelectLeaveItems(query, ct);
        return new LeaveReportResult { Items = items, TotalCount = items.Count };
    }

    private async Task<LeaveReportResult> GetLeaveByTypeReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery().Where(x => !x.IsDeleted);
        query = ApplyDateFilter(query, request);

        var items = await query
            .GroupBy(x => new { x.TypeOfLeaveId, x.TypeOfLeave.Name })
            .Select(g => new LeaveReportItem
            {
                TypeOfLeaveId = g.Key.TypeOfLeaveId,
                TypeOfLeaveName = g.Key.Name,
                GroupKey = g.Key.Name,
                GroupCount = g.Count(),
                TotalDays = g.Sum(x => x.CountOfDays ?? 0)
            })
            .OrderByDescending(x => x.GroupCount)
            .ToListAsync(ct);

        return new LeaveReportResult { Items = items, TotalCount = items.Sum(x => x.GroupCount) };
    }

    private async Task<LeaveReportResult> GetLeaveByDepartmentReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery().Where(x => !x.IsDeleted);
        query = ApplyDateFilter(query, request);

        var items = await query
            .Where(x => x.Employee.ManagementInformation != null && x.Employee.ManagementInformation.Department != null)
            .GroupBy(x => x.Employee.ManagementInformation.Department.Name)
            .Select(g => new LeaveReportItem
            {
                GroupKey = g.Key,
                GroupCount = g.Count(),
                TotalDays = g.Sum(x => x.CountOfDays ?? 0)
            })
            .OrderByDescending(x => x.GroupCount)
            .ToListAsync(ct);

        return new LeaveReportResult { Items = items, TotalCount = items.Sum(x => x.GroupCount) };
    }

    private async Task<LeaveReportResult> GetLeaveByDirectorateReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery().Where(x => !x.IsDeleted);
        query = ApplyDateFilter(query, request);

        var items = await query
            .Where(x => x.Employee.ManagementInformation != null && x.Employee.ManagementInformation.Directorate != null)
            .GroupBy(x => x.Employee.ManagementInformation.Directorate.Name)
            .Select(g => new LeaveReportItem
            {
                GroupKey = g.Key,
                GroupCount = g.Count(),
                TotalDays = g.Sum(x => x.CountOfDays ?? 0)
            })
            .OrderByDescending(x => x.GroupCount)
            .ToListAsync(ct);

        return new LeaveReportResult { Items = items, TotalCount = items.Sum(x => x.GroupCount) };
    }

    private async Task<LeaveReportResult> GetLeaveByPeriodReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        if (!request.DateFrom.HasValue || !request.DateTo.HasValue)
            return new LeaveReportResult { Summary = "يجب تحديد الفترة الزمنية" };

        var query = BuildBaseLeaveQuery()
            .Where(x => !x.IsDeleted &&
                        x.FromDate.HasValue && x.ToDate.HasValue &&
                        x.FromDate.Value >= request.DateFrom.Value &&
                        x.ToDate.Value <= request.DateTo.Value);

        if (request.TypeOfLeaveId.HasValue)
            query = query.Where(x => x.TypeOfLeaveId == request.TypeOfLeaveId.Value);

        var items = await SelectLeaveItems(query, ct);
        return new LeaveReportResult { Items = items, TotalCount = items.Count };
    }

    private async Task<LeaveReportResult> GetEmployeesOnLeaveNowReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var today = DateOnly.FromDateTime(DateTime.Now);
        var query = BuildBaseLeaveQuery()
            .Where(x => x.LeaveStatusId == LeaveStatus.Active &&
                        !x.IsDeleted &&
                        x.FromDate.HasValue && x.ToDate.HasValue &&
                        x.FromDate.Value <= today && x.ToDate.Value >= today);

        if (request.DepartmentId.HasValue)
            query = query.Where(x => x.Employee.ManagementInformation.DepartmentId == request.DepartmentId.Value);

        if (request.DirectorateId.HasValue)
            query = query.Where(x => x.Employee.ManagementInformation.DirectorateId == request.DirectorateId.Value);

        var items = await SelectLeaveItems(query, ct);
        return new LeaveReportResult { Items = items, TotalCount = items.Count };
    }

    private async Task<LeaveReportResult> GetLeavePromotionImpactReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery()
            .Where(x => !x.IsDeleted && x.TypeOfLeave.AffectsPromotion);

        query = ApplyDateFilter(query, request);

        var items = await query
            .Where(x => x.AffectsPromotion == true || x.TypeOfLeave.AffectsPromotion)
            .Select(x => new LeaveReportItem
            {
                LeaveId = x.Id,
                EmployeeId = x.EmployeeId,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                TypeOfLeaveName = x.TypeOfLeave.Name,
                FromDate = x.FromDate,
                ToDate = x.ToDate,
                CountOfDays = x.CountOfDays,
                LeaveStatusName = x.LeaveStatusId.GetDisplayName()
            }).ToListAsync(ct);

        return new LeaveReportResult
        {
            Items = items,
            TotalCount = items.Count,
            Summary = $"الموظفون المتأثرون ترقياتهم بالإجازات: {items.Count}"
        };
    }

    private async Task<LeaveReportResult> GetLeaveAllowanceImpactReport(GetLeaveReportQuery request, CancellationToken ct)
    {
        var query = BuildBaseLeaveQuery()
            .Where(x => !x.IsDeleted && x.TypeOfLeave.AffectsSalary);

        query = ApplyDateFilter(query, request);

        var items = await query
            .Where(x => x.AffectsAllowance == true || x.TypeOfLeave.AffectsSalary)
            .Select(x => new LeaveReportItem
            {
                LeaveId = x.Id,
                EmployeeId = x.EmployeeId,
                EmployeeName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                TypeOfLeaveName = x.TypeOfLeave.Name,
                FromDate = x.FromDate,
                ToDate = x.ToDate,
                CountOfDays = x.CountOfDays,
                LeaveStatusName = x.LeaveStatusId.GetDisplayName()
            }).ToListAsync(ct);

        return new LeaveReportResult
        {
            Items = items,
            TotalCount = items.Count,
            Summary = $"الموظفون المتأثرون علاواتهم بالإجازات: {items.Count}"
        };
    }

    private IQueryable<Leaves> BuildBaseLeaveQuery()
    {
        return _leavesRepository.GetQueryable()
            .Include(x => x.Employee).ThenInclude(e => e.ManagementInformation).ThenInclude(m => m!.Department)
            .Include(x => x.Employee).ThenInclude(e => e.ManagementInformation).ThenInclude(m => m!.Directorate)
            .Include(x => x.TypeOfLeave);
    }

    private static IQueryable<Leaves> ApplyDateFilter(IQueryable<Leaves> query, GetLeaveReportQuery request)
    {
        if (request.DateFrom.HasValue)
            query = query.Where(x => x.FromDate >= request.DateFrom.Value);
        if (request.DateTo.HasValue)
            query = query.Where(x => x.ToDate <= request.DateTo.Value);
        return query;
    }

    private static async Task<List<LeaveReportItem>> SelectLeaveItems(IQueryable<Leaves> query, CancellationToken ct)
    {
        return await query.Select(x => new LeaveReportItem
        {
            LeaveId = x.Id,
            EmployeeId = x.EmployeeId,
            EmployeeName = x.Employee.FullName,
            JobCode = x.Employee.JobCode,
            TypeOfLeaveId = x.TypeOfLeaveId,
            TypeOfLeaveName = x.TypeOfLeave.Name,
            DepartmentName = x.Employee.ManagementInformation != null && x.Employee.ManagementInformation.Department != null
                ? x.Employee.ManagementInformation.Department.Name : null,
            DirectorateName = x.Employee.ManagementInformation != null && x.Employee.ManagementInformation.Directorate != null
                ? x.Employee.ManagementInformation.Directorate.Name : null,
            FromDate = x.FromDate,
            ToDate = x.ToDate,
            CountOfDays = x.CountOfDays,
            LeaveStatusName = x.LeaveStatusId.GetDisplayName()
        }).ToListAsync(ct);
    }
}
