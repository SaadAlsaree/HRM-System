using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveVerificationService : ILeaveVerificationService
{
    private readonly IBaseRepository<Leaves> _leavesRepository;
    private readonly IBaseRepository<TypeOfLeave> _typeOfLeaveRepository;
    private readonly IBaseRepository<LeavesBalance> _leavesBalanceRepository;

    public LeaveVerificationService(
        IBaseRepository<Leaves> leavesRepository,
        IBaseRepository<TypeOfLeave> typeOfLeaveRepository,
        IBaseRepository<LeavesBalance> leavesBalanceRepository)
    {
        _leavesRepository = leavesRepository;
        _typeOfLeaveRepository = typeOfLeaveRepository;
        _leavesBalanceRepository = leavesBalanceRepository;
    }

    public async Task<List<string>> ValidateCreateAsync(LeaveCreateRequest request, CancellationToken ct)
    {
        var errors = new List<string>();

        if (request.FromDate.HasValue && request.ToDate.HasValue && request.ToDate < request.FromDate)
            errors.Add("تاريخ الانتهاء لا يمكن أن يسبق تاريخ البداية");

        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == request.TypeOfLeaveId, cancellationToken: ct);
        if (typeOfLeave == null)
        {
            errors.Add("نوع الإجازة غير موجود");
            return errors;
        }

        if (typeOfLeave.MaxDurationDays.HasValue && request.CountOfDays.HasValue &&
            request.CountOfDays.Value > typeOfLeave.MaxDurationDays.Value)
            errors.Add($"عدد الأيام يتجاوز الحد الأقصى المسموح ({typeOfLeave.MaxDurationDays.Value} يوم)");

        if (typeOfLeave.RequiresAdministrativeOrder && string.IsNullOrWhiteSpace(request.OrderNo))
            errors.Add("الإجازة تتطلب أمر إداري");

        if (typeOfLeave.IsBalanceBased && request.CountOfDays.HasValue)
        {
            if (!await HasSufficientBalanceAsync(request.EmployeeId, request.TypeOfLeaveId, request.CountOfDays.Value, ct))
                errors.Add("الرصيد غير كافٍ للحصول على هذه الإجازة");
        }

        if (request.FromDate.HasValue && request.ToDate.HasValue)
        {
            if (await HasOverlapAsync(request.EmployeeId, request.FromDate.Value, request.ToDate.Value, null, ct))
                errors.Add("يوجد إجازة متداخلة في نفس الفترة");
        }

        return errors;
    }

    public async Task<List<string>> ValidateUpdateAsync(Leaves leave, LeaveUpdateRequest request, CancellationToken ct)
    {
        var errors = new List<string>();

        if (leave.LeaveStatusId is LeaveStatus.Approved or LeaveStatus.Active or LeaveStatus.Expired)
        {
            errors.Add("لا يمكن تعديل إجازة معتمدة أو نشطة أو منتهية");
            return errors;
        }

        if (request.FromDate.HasValue && request.ToDate.HasValue && request.ToDate < request.FromDate)
            errors.Add("تاريخ الانتهاء لا يمكن أن يسبق تاريخ البداية");

        var typeOfLeaveId = request.TypeOfLeaveId ?? leave.TypeOfLeaveId;
        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == typeOfLeaveId, cancellationToken: ct);

        if (typeOfLeave?.MaxDurationDays.HasValue == true && request.CountOfDays.HasValue &&
            request.CountOfDays.Value > typeOfLeave.MaxDurationDays.Value)
            errors.Add($"عدد الأيام يتجاوز الحد الأقصى المسموح ({typeOfLeave.MaxDurationDays.Value} يوم)");

        var fromDate = request.FromDate ?? leave.FromDate;
        var toDate = request.ToDate ?? leave.ToDate;
        if (fromDate.HasValue && toDate.HasValue)
        {
            if (await HasOverlapAsync(leave.EmployeeId, fromDate.Value, toDate.Value, leave.Id, ct))
                errors.Add("يوجد إجازة متداخلة في نفس الفترة");
        }

        return errors;
    }

    public async Task<bool> HasSufficientBalanceAsync(Guid employeeId, int typeOfLeaveId, int days, CancellationToken ct)
    {
        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == typeOfLeaveId, cancellationToken: ct);
        if (typeOfLeave is { IsBalanceBased: false })
            return true;

        var balance = await _leavesBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
        if (balance == null)
            return false;

        return balance.RemainingBalance >= days;
    }

    public async Task<bool> HasOverlapAsync(Guid employeeId, DateOnly fromDate, DateOnly toDate, Guid? excludeLeaveId, CancellationToken ct)
    {
        var overlapping = await _leavesRepository.Query(filter: x =>
            x.EmployeeId == employeeId &&
            !x.IsDeleted &&
            x.LeaveStatusId != LeaveStatus.Cancelled &&
            x.LeaveStatusId != LeaveStatus.Rejected &&
            x.LeaveStatusId != LeaveStatus.Draft &&
            (excludeLeaveId == null || x.Id != excludeLeaveId.Value) &&
            x.FromDate.HasValue && x.ToDate.HasValue &&
            x.FromDate.Value <= toDate && x.ToDate.Value >= fromDate).ToListAsync();
        return overlapping.Count > 0;
    }
}
