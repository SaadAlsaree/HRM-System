using HRM.Hub.Application.Extensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.PromotionReport.Queries.GetReportPromotions;

public class GetReportPromotionsHandler : IRequestHandler<GetReportPromotionsQuery, Response<PagedResult<GetReportPromotionsViewModel>>>
{
    private readonly IBaseRepository<Promotion> _repository;
    private readonly IBaseRepository<JobDegree> _repositoryJobDegree;
    private readonly IBaseRepository<JobTitle> _repositoryJobTitle;

    public GetReportPromotionsHandler(
        IBaseRepository<Promotion> repository,
        IBaseRepository<JobDegree> repositoryJobDegree,
        IBaseRepository<JobTitle> repositoryJobTitle)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        _repositoryJobDegree = repositoryJobDegree ?? throw new ArgumentNullException(nameof(repositoryJobDegree));
        _repositoryJobTitle = repositoryJobTitle ?? throw new ArgumentNullException(nameof(repositoryJobTitle));
    }

    public async Task<Response<PagedResult<GetReportPromotionsViewModel>>> Handle(
        GetReportPromotionsQuery request,
        CancellationToken cancellationToken)
    {
        var baseQuery = _repository.Query();

        IQueryable<Promotion> filtered = baseQuery;

        if (request.EmployeeId != Guid.Empty)
            filtered = filtered.Where(z => z.Employee.Id == request.EmployeeId);

        if (request.DegreeId > 0)
            filtered = filtered.Where(z => z.JobDegreeId == request.DegreeId);

        if (request.FromDate.HasValue)
            filtered = filtered.Where(z => z.DueDateDegree >= request.FromDate || z.DueDateCategory >= request.FromDate);

        if (request.ToDate.HasValue)
            filtered = filtered.Where(z => z.DueDateDegree <= request.ToDate || z.DueDateCategory <= request.ToDate);

        var count = await filtered.CountAsync(cancellationToken);

        var jobDegreesByIndex = await _repositoryJobDegree
            .Query(z => z.StatusId == Status.Active && !z.IsDeleted)
            .ToDictionaryAsync(z => z.Index, z => z, cancellationToken);

        var jobTitlesByDegreeId = await _repositoryJobTitle
            .Query(z => z.StatusId == Status.Active && !z.IsDeleted)
            .Include(z => z.Degree)
            .OrderBy(z => z.Id)
            .ToListAsync(cancellationToken);

        var jobTitlesLookup = jobTitlesByDegreeId
            .GroupBy(z => z.DegreeId)
            .ToDictionary(
                x => x.Key,
                x => x.ToList());

        var promotions = await filtered
            .Include(z => z.JobDegree)
            .Include(z => z.Employee)
                .ThenInclude(z => z.ManagementInformation)
                .ThenInclude(z => z.JobTitle)
                .ThenInclude(z => z.Degree)
            .Include(z => z.Employee)
                .ThenInclude(z => z.EducationInformation)
                .ThenInclude(z => z.AcademicAchievement)
            .Include(z => z.Employee)
                .ThenInclude(z => z.ThanksAndSeniority)
            .Include(z => z.Employee)
                .ThenInclude(z => z.EmployeeDisciplinary)
                .ThenInclude(z => z.TypeOfDisciplinary)
            .Include(z => z.Employee)
                .ThenInclude(z => z.Leaves)
            .Include(z => z.Employee)
                .ThenInclude(z => z.ChangeDegree)
            .Include(z => z.Employee)
                .ThenInclude(z => z.ChangeDueDate)
            .Include(z => z.Employee)
                .ThenInclude(z => z.ChangeJobTitle)
                .ThenInclude(z => z.NewJobTitle)
            .AsSplitQuery()
            .OrderBy(z => z.Id)
            .ApplyPagination(request)
            .ToListAsync(cancellationToken);

        var items = promotions
            .Select(z => MapToViewModel(z, jobDegreesByIndex, jobTitlesLookup))
            .ToList();

        foreach (var item in items)
            item.StatusName = item.Status.GetDisplayName();

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetReportPromotionsViewModel>
        {
            Items = items,
            TotalCount = count
        });
    }

    private static GetReportPromotionsViewModel MapToViewModel(
        Promotion promotion,
        IReadOnlyDictionary<int, JobDegree> jobDegreesByIndex,
        IReadOnlyDictionary<int, List<JobTitle>> jobTitlesLookup)
    {
        var employee = promotion.Employee;
        var currentManagementInfo = employee?.ManagementInformation;
        var currentEducation = GetCurrentEducation(employee?.EducationInformation);
        var latestPromotionOrder = GetLatestPromotionOrder(employee?.ChangeDegree, employee?.ChangeDueDate);
        var latestThanks = GetLatestThanks(employee?.ThanksAndSeniority);
        var latestDisciplinary = GetLatestDisciplinary(employee?.EmployeeDisciplinary);
        var latestLeaveWithoutSalary = GetLatestLeaveWithoutSalary(employee?.Leaves);
        var latestJobTitleChange = GetLatestJobTitleChange(employee?.ChangeJobTitle);

        return new GetReportPromotionsViewModel
        {
            Id = promotion.Id,
            EmployeeId = employee?.Id ?? promotion.Id,
            FullName = employee?.FullName ?? string.Empty,
            JobCode = employee?.JobCode ?? string.Empty,
            LotNumber = employee?.LotNumber ?? string.Empty,
            Status = promotion.StatusId,
            FileNumber = employee?.StatisticalIndex ?? string.Empty,
            JobDegreeName = promotion.JobDegree?.Name ?? string.Empty,
            JobTitleName = currentManagementInfo?.JobTitle?.Name ?? string.Empty,
            OrderNo = latestPromotionOrder?.OrderNo ?? string.Empty,
            OrderDate = latestPromotionOrder?.OrderDate,
            ThanksOrderNo = FormatThanksOrderNumbers(employee?.ThanksAndSeniority),
            ThanksOrderDate = latestThanks?.DateOfBook,
            Penalties = FormatPenalty(latestDisciplinary),
            PenaltiesDate = latestDisciplinary?.BookDate,
            LeaveWithoutSalary = FormatLeaveWithoutSalary(latestLeaveWithoutSalary),
            FromDate = latestLeaveWithoutSalary?.FromDate,
            ToDate = latestLeaveWithoutSalary?.ToDate,
            NewJobDegreeName = GetNextJobDegreeName(promotion, jobDegreesByIndex),
            AcademicAchievement = currentEducation?.AcademicAchievement?.Name ?? string.Empty,
            NewJobTitleName = GetNextJobTitleName(currentManagementInfo?.JobTitle, latestJobTitleChange, jobDegreesByIndex, jobTitlesLookup),
            DueDate = promotion.DueDateDegree ?? promotion.DueDateCategory,
            Notes = promotion.Note ?? string.Empty,
        };
    }

    private static string GetNextJobDegreeName(
        Promotion promotion,
        IReadOnlyDictionary<int, JobDegree> jobDegreesByIndex)
    {
        var currentDegree = promotion.JobDegree;
        if (currentDegree == null)
            return string.Empty;

        var promotedDegreeIndex = currentDegree.Index - 1;

        return jobDegreesByIndex.TryGetValue(promotedDegreeIndex, out var promotedDegree)
            ? promotedDegree.Name ?? string.Empty
            : currentDegree.Name ?? string.Empty;
    }

    private static string GetNextJobTitleName(
        JobTitle? currentJobTitle,
        ChangeJobTitle? latestJobTitleChange,
        IReadOnlyDictionary<int, JobDegree> jobDegreesByIndex,
        IReadOnlyDictionary<int, List<JobTitle>> jobTitlesLookup)
    {
        if (currentJobTitle == null)
            return latestJobTitleChange?.NewJobTitle?.Name ?? string.Empty;

        var currentTitleDegreeIndex = currentJobTitle.Degree?.Index;
        if (!currentTitleDegreeIndex.HasValue)
            return latestJobTitleChange?.NewJobTitle?.Name ?? currentJobTitle.Name ?? string.Empty;

        var promotedDegreeIndex = currentTitleDegreeIndex.Value - 1;
        if (promotedDegreeIndex <= 0)
            return latestJobTitleChange?.NewJobTitle?.Name ?? currentJobTitle.Name ?? string.Empty;

        if (!jobDegreesByIndex.TryGetValue(promotedDegreeIndex, out var promotedDegree))
            return latestJobTitleChange?.NewJobTitle?.Name ?? currentJobTitle.Name ?? string.Empty;

        if (jobTitlesLookup.TryGetValue(promotedDegree.Id, out var titles) && titles.Count > 0)
        {
            var currentTitleName = NormalizeTitleName(currentJobTitle.Name);

            var exactFamilyMatch = titles.FirstOrDefault(x =>
            {
                var candidateName = NormalizeTitleName(x.Name);
                return candidateName == $"{currentTitleName} اقدم" ||
                       candidateName == $"{currentTitleName}أقدم";
            });

            if (exactFamilyMatch != null)
                return exactFamilyMatch.Name ?? string.Empty;

            var prefixFamilyMatch = titles
                .Where(x =>
                {
                    var candidateName = NormalizeTitleName(x.Name);
                    return candidateName.StartsWith(currentTitleName, StringComparison.OrdinalIgnoreCase) &&
                           candidateName != currentTitleName;
                })
                .OrderBy(x => NormalizeTitleName(x.Name).Length)
                .FirstOrDefault();

            if (prefixFamilyMatch != null)
                return prefixFamilyMatch.Name ?? string.Empty;

            return titles[0].Name ?? string.Empty;
        }

        return latestJobTitleChange?.NewJobTitle?.Name ?? currentJobTitle.Name ?? string.Empty;
    }

    private static string NormalizeTitleName(string? titleName)
    {
        return (titleName ?? string.Empty)
            .Trim()
            .Replace("  ", " ");
    }

    private static EducationInformation? GetCurrentEducation(IEnumerable<EducationInformation>? educations)
    {
        return educations?
            .OrderByDescending(x => x.IsCurrent)
            .ThenByDescending(x => x.IsInHiring)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();
    }

    private static OrderInfo? GetLatestPromotionOrder(
        IEnumerable<ChangeDegrees>? changeDegrees,
        IEnumerable<ChangeDueDates>? changeDueDates)
    {
        var candidates = new List<OrderInfo>();

        if (changeDegrees != null)
        {
            candidates.AddRange(changeDegrees.Select(x => new OrderInfo(
                x.OrderNo,
                x.OrderDate,
                x.CreateAt)));
        }

        if (changeDueDates != null)
        {
            candidates.AddRange(changeDueDates.Select(x => new OrderInfo(
                x.OrderNo,
                x.OrderDate,
                x.CreateAt)));
        }

        return candidates
            .OrderByDescending(x => x.OrderDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.CreateAt ?? DateTime.MinValue)
            .FirstOrDefault();
    }

    private static ThanksAndSeniority? GetLatestThanks(IEnumerable<ThanksAndSeniority>? thanksAndSeniorities)
    {
        return thanksAndSeniorities?
            .OrderByDescending(x => x.DateOfBook)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();
    }

    private static EmployeeDisciplinary? GetLatestDisciplinary(IEnumerable<EmployeeDisciplinary>? employeeDisciplinaries)
    {
        return employeeDisciplinaries?
            .Where(x => x.StopPromotion == true)
            .OrderByDescending(x => x.BookDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault()
            ?? employeeDisciplinaries?
                .OrderByDescending(x => x.BookDate ?? DateOnly.MinValue)
                .ThenByDescending(x => x.CreateAt)
                .FirstOrDefault();
    }

    private static Leaves? GetLatestLeaveWithoutSalary(IEnumerable<Leaves>? leaves)
    {
        return leaves?
            .Where(x => x.SalaryStatusId == SalaryStatus.WithoutSalary)
            .OrderByDescending(x => x.FromDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.OrderDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();
    }

    private static ChangeJobTitle? GetLatestJobTitleChange(IEnumerable<ChangeJobTitle>? changeJobTitles)
    {
        return changeJobTitles?
            .OrderByDescending(x => x.OrderDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();
    }

    private static string FormatThanksOrderNumbers(IEnumerable<ThanksAndSeniority>? thanksAndSeniorities)
    {
        if (thanksAndSeniorities == null)
            return string.Empty;

        var bookNumbers = thanksAndSeniorities
            .Select(x => x.BookNo)
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Distinct()
            .ToList();

        return bookNumbers.Count > 0
            ? string.Join(", ", bookNumbers)
            : string.Empty;
    }

    private static string FormatPenalty(EmployeeDisciplinary? disciplinary)
    {
        if (disciplinary == null)
            return string.Empty;

        var parts = new List<string>();

        if (!string.IsNullOrWhiteSpace(disciplinary.TypeOfDisciplinary?.Name))
            parts.Add(disciplinary.TypeOfDisciplinary.Name);

        if (!string.IsNullOrWhiteSpace(disciplinary.BookNo))
            parts.Add(disciplinary.BookNo);

        if (parts.Count == 0 && !string.IsNullOrWhiteSpace(disciplinary.TitleOfBook))
            parts.Add(disciplinary.TitleOfBook);

        return string.Join(" - ", parts);
    }

    private static string FormatLeaveWithoutSalary(Leaves? leave)
    {
        if (leave == null)
            return string.Empty;

        if (!string.IsNullOrWhiteSpace(leave.OrderNo))
            return leave.OrderNo;

        return leave.LegacyTypeOfLeaveId.GetDisplayName();
    }

    private sealed record OrderInfo(string? OrderNo, DateOnly? OrderDate, DateTime? CreateAt);
}
