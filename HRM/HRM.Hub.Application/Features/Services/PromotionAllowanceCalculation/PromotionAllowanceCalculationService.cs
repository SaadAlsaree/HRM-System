using HRM.Hub.Application.Features.PromotionAllowanceCalculation.Models;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.Services.PromotionAllowanceCalculation;

public class PromotionAllowanceCalculationService : IPromotionAllowanceCalculationService
{
    private readonly IBaseRepository<Employees> _employeeRepository;
    private readonly IBaseRepository<Promotion> _promotionRepository;
    private readonly IBaseRepository<EmployeeService> _employeeServiceRepository;
    private readonly IBaseRepository<ThanksAndSeniority> _thanksRepository;
    private readonly IBaseRepository<PromotionAllowanceRule> _ruleRepository;
    private readonly IBaseRepository<PromotionAllowanceCalculationRun> _runRepository;
    private readonly IBaseRepository<PromotionAllowanceCalculationDetail> _detailRepository;
    private readonly IBaseRepository<AnnualAllowanceRule> _annualAllowanceRuleRepository;

    public PromotionAllowanceCalculationService(
        IBaseRepository<Employees> employeeRepository,
        IBaseRepository<Promotion> promotionRepository,
        IBaseRepository<EmployeeService> employeeServiceRepository,
        IBaseRepository<ThanksAndSeniority> thanksRepository,
        IBaseRepository<PromotionAllowanceRule> ruleRepository,
        IBaseRepository<PromotionAllowanceCalculationRun> runRepository,
        IBaseRepository<PromotionAllowanceCalculationDetail> detailRepository,
        IBaseRepository<AnnualAllowanceRule> annualAllowanceRuleRepository)
    {
        _employeeRepository = employeeRepository;
        _promotionRepository = promotionRepository;
        _employeeServiceRepository = employeeServiceRepository;
        _thanksRepository = thanksRepository;
        _ruleRepository = ruleRepository;
        _runRepository = runRepository;
        _detailRepository = detailRepository;
        _annualAllowanceRuleRepository = annualAllowanceRuleRepository;
    }

    public async Task<PromotionAllowanceCalculationDetailsViewModel?> CalculateAsync(Guid employeeId, string trigger, CancellationToken ct)
    {
        var employee = await _employeeRepository.Query(
                x => x.Id == employeeId,
                include: inc => inc
                    .Include(x => x.Promotion).ThenInclude(x => x.JobDegree)
                    .Include(x => x.Promotion).ThenInclude(x => x.JobCategory)
                    .Include(x => x.JobInformation)
                    .Include(x => x.EmployeeService)
                    .Include(x => x.ChangeDegree)
                    .Include(x => x.EducationInformation).ThenInclude(x => x.AcademicAchievement)
                    .Include(x => x.EmployeeApplicableLaws)
                    .Include(x => x.ServiceCalculations).ThenInclude(x => x.TypeOfService)
                    .Include(x => x.ThanksAndSeniority)
                    .Include(x => x.EmployeeDisciplinary).ThenInclude(x => x.TypeOfDisciplinary)
                    .Include(x => x.Leaves)
                    .Include(x => x.StudyLeave))
            .AsSplitQuery()
            .FirstOrDefaultAsync(ct);

        if (employee?.Promotion == null)
            return null;

        await ResetConsumedThanksAsync(employee.Id, ct);

        var currentEducation = employee.EducationInformation?
            .OrderByDescending(x => x.IsCurrent)
            .ThenByDescending(x => x.IsInHiring)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();
        var applicableLawId = employee.EmployeeApplicableLaws?
            .OrderByDescending(x => x.LastUpdateAt ?? x.CreateAt)
            .ThenByDescending(x => x.CreateAt)
            .Select(x => x.LawId)
            .FirstOrDefault();

        var promotionRule = await ResolveRuleAsync(
            PromotionAllowanceCalculationKind.Promotion,
            employee.Promotion.JobDegreeId,
            employee.Promotion.JobCategoryId,
            currentEducation?.AcademicAchievementId,
            applicableLawId,
            employee.Promotion.JobDegree?.NextPromotion ?? 0,
            ct);

        var latestChangeDegree = employee.ChangeDegree?
            .OrderByDescending(x => x.OrderDate ?? DateOnly.MinValue)
            .ThenByDescending(x => x.CreateAt)
            .FirstOrDefault();

        var promotionBaseDate = ResolveBaseDate(
            latestChangeDegree?.NewDegreeDueDate,
            employee.Promotion.DueDateDegree,
            employee.JobInformation?.HireDate,
            promotionRule.BaseMonths);

        var promotionDate = promotionBaseDate.AddMonths(promotionRule.BaseMonths);
        var details = new List<PromotionAllowanceCalculationDetail>();

        details.Add(CreateDetail(
            employee.Id,
            PromotionAllowanceCalculationKind.Promotion,
            "BASE_RULE",
            nameof(PromotionAllowanceRule),
            promotionRule.RuleIdText,
            $"المدة القانونية الأساسية للترفيع {promotionRule.BaseMonths} شهر.",
            promotionBaseDate,
            promotionDate,
            promotionRule.BaseMonths,
            0));

        promotionDate = CalculateActualServiceSum(employee, PromotionAllowanceCalculationKind.Promotion, promotionDate, details);
        promotionDate = ApplyServiceCalculationAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Promotion,
            promotionDate,
            details);

        promotionDate = ApplyThanksAndSeniorityAdjustments(
            employee,
            promotionBaseDate,
            promotionDate,
            details,
            out var consumedThanks,
            out var applicableThanks);

        promotionDate = ApplyDisciplinaryAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Promotion,
            promotionDate,
            details);

        promotionDate = ApplyLeaveAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Promotion,
            promotionDate,
            details);

        promotionDate = ApplyStudyLeaveAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Promotion,
            promotionDate,
            details);

        // --- Allowance calculation block (same employee data, no second DB trip) ---
        var lastAllowanceDate = employee.Promotion.LastAllowanceDate ?? employee.JobInformation?.HireDate ?? DateOnly.FromDateTime(DateTime.Today);
        var allowanceRule = await ResolveAllowanceRuleAsync(
            employee.Promotion.JobDegreeId,
            employee.Promotion.JobCategoryId,
            currentEducation?.AcademicAchievementId,
            applicableLawId,
            employee.Promotion.JobCategory?.NextPromotion ?? 0,
            ct);

        var allowanceBaseDate = lastAllowanceDate;
        var allowanceBaseDueDate = allowanceBaseDate.AddMonths(allowanceRule.BaseMonths);
        var allowanceCurrentDate = allowanceBaseDueDate;
        var allowanceDetails = new List<PromotionAllowanceCalculationDetail>();

        allowanceDetails.Add(new PromotionAllowanceCalculationDetail
        {
            EmployeeId = employee.Id,
            CalculationKind = PromotionAllowanceCalculationKind.Allowance,
            StepCode = "BASE_RULE",
            SourceEntityName = nameof(AnnualAllowanceRule),
            SourceEntityId = allowanceRule.RuleIdText,
            Reason = $"المدة القانونية الأساسية للعلاوة السنوية {allowanceRule.BaseMonths} شهر.",
            BeforeDate = allowanceBaseDate,
            AfterDate = allowanceBaseDueDate,
            DeltaMonths = allowanceRule.BaseMonths,
            DeltaDays = 0
        });

        allowanceCurrentDate = CalculateActualServiceSum(employee, PromotionAllowanceCalculationKind.Allowance, allowanceCurrentDate, allowanceDetails);
        allowanceCurrentDate = ApplyServiceCalculationAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Allowance,
            allowanceCurrentDate,
            allowanceDetails);
        allowanceCurrentDate = ApplyLeaveAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Allowance,
            allowanceCurrentDate,
            allowanceDetails);
        allowanceCurrentDate = ApplyDisciplinaryAdjustments(
            employee,
            PromotionAllowanceCalculationKind.Allowance,
            allowanceCurrentDate,
            allowanceDetails);
        allowanceCurrentDate = ApplyThanksAndSeniorityAdjustments(
            employee,
            allowanceBaseDate,
            allowanceCurrentDate,
            allowanceDetails,
            out var consumedThanksAllowanceAllowance,
            out var _);

        var allowanceSummary = BuildAllowanceSummary(allowanceCurrentDate, allowanceDetails);
        // --- End allowance block ---

        var runId = Guid.NewGuid();
        var promotionSummary = BuildSummary(promotionDate, details);
        var run = new PromotionAllowanceCalculationRun
        {
            Id = runId,
            EmployeeId = employee.Id,
            Trigger = trigger,
            PromotionBaseDate = promotionBaseDate,
            PromotionBaseMonths = promotionRule.BaseMonths,
            PromotionDueDate = promotionDate,
            AllowanceBaseDate = allowanceBaseDate,
            AllowanceBaseMonths = allowanceRule.BaseMonths,
            AllowanceDueDate = allowanceCurrentDate,
            Summary = $"{promotionSummary} | {allowanceSummary}",
            StatusId = Status.Active
        };

        employee.Promotion.DueDateDegree = promotionDate;
        employee.Promotion.LastUpdateAt = DateTime.UtcNow;

        var isNewEmployeeService = false;
        var employeeService = employee.EmployeeService ?? await _employeeServiceRepository.Find(x => x.Id == employee.Id, cancellationToken: ct);
        if (employeeService == null)
        {
            isNewEmployeeService = true;
            employeeService = new EmployeeService
            {
                Id = employee.Id,
                PromotionCalculation = promotionSummary,
                Notes = "تم إنشاؤه بواسطة محرك الترفيع والعلاوة.",
                StatusId = Status.Active
            };
        }
        else
        {
            employeeService.PromotionCalculation = promotionSummary;
            employeeService.LastUpdateAt = DateTime.UtcNow;
        }

        foreach (var item in applicableThanks)
        {
            if (item.TypeOfBookId > 0 && item.TypeOfSeniorityId == 0)
            {
                if (item.CountOfMonths != 1 && item.CountOfMonths != 6 && item.CountOfMonths != 12)
                {
                    continue;
                }
            }
            item.IsConsumed = true;
            item.ConsumedAt = DateTime.UtcNow;
            item.ConsumedCalculationRunId = runId;
            item.IsCalculation = true;
        }

        details.AddRange(allowanceDetails);

        foreach (var detail in details)
        {
            detail.Id = Guid.NewGuid();
            detail.RunId = runId;
            detail.StatusId = Status.Active;
            detail.CreateAt = DateTime.UtcNow;
        }

        var consumedThanksList = applicableThanks
            .Where(x => x.TypeOfBookId > 0 && x.TypeOfSeniorityId == 0 && (x.CountOfMonths == 1 || x.CountOfMonths == 6 || x.CountOfMonths == 12))
            .Where(x => x.TypeOfSeniorityId > 0)
            .ToList();

        await _runRepository.Create(run, ct);

        if (!_promotionRepository.Update(employee.Promotion))
            return null;

        if (isNewEmployeeService)
        {
            await _employeeServiceRepository.Create(employeeService, ct);
        }
        else
        {
            _employeeServiceRepository.Update(employeeService);
        }

        if (consumedThanksList.Count > 0)
            await _thanksRepository.UpdateRange(consumedThanksList, cancellationToken: ct);

        if (details.Count > 0)
            await _detailRepository.CreateRange(details, cancellationToken: ct);

        return await GetLatestDetailsAsync(employeeId, ct);
    }

    public async Task<IReadOnlyList<PromotionAllowanceCalculationDetailsViewModel>> CalculateBatchAsync(IEnumerable<Guid> employeeIds, string trigger, CancellationToken ct)
    {
        var result = new List<PromotionAllowanceCalculationDetailsViewModel>();
        foreach (var employeeId in employeeIds.Distinct())
        {
            var details = await CalculateAsync(employeeId, trigger, ct);
            if (details != null)
                result.Add(details);
        }

        return result;
    }

    public async Task<PromotionAllowanceCalculationDetailsViewModel?> GetLatestDetailsAsync(Guid employeeId, CancellationToken ct)
    {
        var run = await _runRepository.Query(
                x => x.EmployeeId == employeeId,
                include: inc => inc.Include(x => x.Details))
            .OrderByDescending(x => x.CreateAt)
            .FirstOrDefaultAsync(ct);

        if (run == null)
            return null;

        return new PromotionAllowanceCalculationDetailsViewModel
        {
            RunId = run.Id,
            EmployeeId = run.EmployeeId,
            Trigger = run.Trigger,
            PromotionBaseDate = run.PromotionBaseDate,
            PromotionBaseMonths = run.PromotionBaseMonths,
            PromotionDueDate = run.PromotionDueDate,
            AllowanceBaseDate = run.AllowanceBaseDate,
            AllowanceBaseMonths = run.AllowanceBaseMonths,
            AllowanceDueDate = run.AllowanceDueDate,
            Summary = run.Summary,
            CalculatedAt = run.CreateAt,
            Steps = run.Details
                .OrderBy(x => x.CreateAt)
                .ThenBy(x => x.StepCode)
                .Select(x => new PromotionAllowanceCalculationStepViewModel
                {
                    CalculationKind = x.CalculationKind.ToString(),
                    StepCode = x.StepCode,
                    SourceEntityName = x.SourceEntityName,
                    SourceEntityId = x.SourceEntityId,
                    Reason = x.Reason,
                    BeforeDate = x.BeforeDate,
                    AfterDate = x.AfterDate,
                    DeltaMonths = x.DeltaMonths,
                    DeltaDays = x.DeltaDays
                })
                .ToList()
        };
    }

    private async Task ResetConsumedThanksAsync(Guid employeeId, CancellationToken ct)
    {
        var consumed = await _thanksRepository.Query(x => x.EmployeeId == employeeId && x.IsConsumed).ToListAsync(ct);
        if (consumed.Count == 0)
            return;

        foreach (var item in consumed)
        {
            item.IsConsumed = false;
            item.ConsumedAt = null;
            item.ConsumedCalculationRunId = null;
        }

        await _thanksRepository.UpdateRange(consumed, cancellationToken: ct);
    }

    private async Task<(int BaseMonths, string RuleIdText)> ResolveRuleAsync(
        PromotionAllowanceCalculationKind kind,
        int jobDegreeId,
        int jobCategoryId,
        int? academicAchievementId,
        int? applicableLawId,
        int fallbackMonths,
        CancellationToken ct)
    {
        var rules = await _ruleRepository.Query(
                x => x.IsActive && x.CalculationKind == kind)
            .OrderByDescending(x => x.Priority)
            .ToListAsync(ct);

        var matchingRule = rules
            .Where(x => x.JobDegreeId == null || x.JobDegreeId == jobDegreeId)
            .Where(x => x.JobCategoryId == null || x.JobCategoryId == jobCategoryId)
            .Where(x => x.AcademicAchievementId == null || x.AcademicAchievementId == academicAchievementId)
            .Where(x => x.ApplicableLawId == null || x.ApplicableLawId == applicableLawId)
            .OrderByDescending(GetRuleSpecificity)
            .ThenByDescending(x => x.Priority)
            .FirstOrDefault();

        if (matchingRule != null)
            return (matchingRule.BaseMonths, matchingRule.Id.ToString());

        return (fallbackMonths, "fallback");
    }

    private async Task<(int BaseMonths, string RuleIdText)> ResolveAllowanceRuleAsync(
        int jobDegreeId,
        int jobCategoryId,
        int? academicAchievementId,
        int? applicableLawId,
        int fallbackMonths,
        CancellationToken ct)
    {
        var rules = await _annualAllowanceRuleRepository.Query(x => x.IsActive)
            .OrderByDescending(x => x.Priority)
            .ToListAsync(ct);

        var matchingRule = rules
            .Where(x => x.JobDegreeId == null || x.JobDegreeId == jobDegreeId)
            .Where(x => x.JobCategoryId == null || x.JobCategoryId == jobCategoryId)
            .Where(x => x.AcademicAchievementId == null || x.AcademicAchievementId == academicAchievementId)
            .Where(x => x.ApplicableLawId == null || x.ApplicableLawId == applicableLawId)
            .OrderByDescending(GetAnnualAllowanceRuleSpecificity)
            .ThenByDescending(x => x.Priority)
            .FirstOrDefault();

        if (matchingRule != null)
            return (matchingRule.BaseMonths, matchingRule.Id.ToString());

        return (fallbackMonths, "fallback");
    }

    private static int GetRuleSpecificity(PromotionAllowanceRule rule)
    {
        var score = 0;
        if (rule.JobDegreeId.HasValue)
            score++;
        if (rule.JobCategoryId.HasValue)
            score++;
        if (rule.AcademicAchievementId.HasValue)
            score++;
        if (rule.ApplicableLawId.HasValue)
            score++;
        return score;
    }

    private static int GetAnnualAllowanceRuleSpecificity(AnnualAllowanceRule rule)
    {
        var score = 0;
        if (rule.JobDegreeId.HasValue) score++;
        if (rule.JobCategoryId.HasValue) score++;
        if (rule.AcademicAchievementId.HasValue) score++;
        if (rule.ApplicableLawId.HasValue) score++;
        return score;
    }

    private static DateOnly ResolveBaseDate(DateOnly? latestChangeDate, DateOnly? currentDueDate, DateOnly? hireDate, int baseMonths)
    {
        if (latestChangeDate.HasValue)
            return latestChangeDate.Value;

        if (currentDueDate.HasValue)
            return currentDueDate.Value.AddMonths(-baseMonths);

        return hireDate ?? DateOnly.FromDateTime(DateTime.Today);
    }

    private static DateOnly ApplyMonthDelta(DateOnly date, int deltaMonths)
    {
        return deltaMonths == 0 ? date : date.AddMonths(deltaMonths);
    }

    private static DateOnly ApplyDayDelta(DateOnly date, int deltaDays)
    {
        return deltaDays == 0 ? date : date.AddDays(deltaDays);
    }

    private static PromotionAllowanceCalculationDetail CreateDetail(
        Guid employeeId,
        PromotionAllowanceCalculationKind kind,
        string stepCode,
        string sourceEntityName,
        string sourceEntityId,
        string reason,
        DateOnly? beforeDate,
        DateOnly? afterDate,
        int deltaMonths,
        int deltaDays)
    {
        return new PromotionAllowanceCalculationDetail
        {
            EmployeeId = employeeId,
            CalculationKind = kind,
            StepCode = stepCode,
            SourceEntityName = sourceEntityName,
            SourceEntityId = sourceEntityId,
            Reason = reason,
            BeforeDate = beforeDate,
            AfterDate = afterDate,
            DeltaMonths = deltaMonths,
            DeltaDays = deltaDays
        };
    }

    private static bool MatchesScope(PromotionAllowanceEffectScope scope, PromotionAllowanceCalculationKind kind)
    {
        return scope == PromotionAllowanceEffectScope.Both ||
               (scope == PromotionAllowanceEffectScope.Promotion && kind == PromotionAllowanceCalculationKind.Promotion) ||
               (scope == PromotionAllowanceEffectScope.Allowance && kind == PromotionAllowanceCalculationKind.Allowance);
    }

    private static bool IsLeaveImpactful(Leaves leave, PromotionAllowanceCalculationKind kind)
    {
        if (kind == PromotionAllowanceCalculationKind.Promotion)
            return leave.AffectsPromotion ?? leave.SalaryStatusId == SalaryStatus.WithoutSalary;

        return leave.AffectsAllowance ?? leave.SalaryStatusId == SalaryStatus.WithoutSalary;
    }

    private static bool IsStudyLeaveImpactful(StudyLeave studyLeave, PromotionAllowanceCalculationKind kind)
    {
        if (kind == PromotionAllowanceCalculationKind.Promotion)
            return studyLeave.AffectsPromotion ?? false;

        return studyLeave.AffectsAllowance ?? false;
    }

    private static DateOnly CalculateActualServiceSum(
        Employees employee,
        PromotionAllowanceCalculationKind kind,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details)
    {
        var totalMonths = employee.ServiceCalculations?
            .Where(x => !x.IsDeleted && x.CountOfMonth.HasValue && x.CountOfMonth.Value > 0 && x.TypeOfService != null)
            .Where(x => MatchesScope(x.TypeOfService.EffectScope, kind))
            .Sum(x => x.CountOfMonth.Value) ?? 0;

        if (totalMonths == 0)
            return currentDate;

        var before = currentDate;
        currentDate = currentDate.AddMonths(-totalMonths);

        details.Add(CreateDetail(
            employee.Id,
            kind,
            "ACTUAL_SERVICE",
            nameof(ServiceCalculation),
            "",
            $"إجمالي الخدمة الفعلية المحسوبة: {totalMonths} شهر.",
            before,
            currentDate,
            -totalMonths,
            0));

        return currentDate;
    }

    private static DateOnly ApplyServiceCalculationAdjustments(
        Employees employee,
        PromotionAllowanceCalculationKind kind,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details)
    {
        foreach (var item in employee.ServiceCalculations?
                     .Where(x => !x.IsDeleted && x.CountOfMonth.HasValue && x.CountOfMonth.Value > 0 && x.TypeOfService != null)
                     .OrderBy(x => x.OrderDate ?? DateOnly.MinValue)
                     .ThenBy(x => x.CreateAt) ?? Enumerable.Empty<ServiceCalculation>())
        {
            if (!MatchesScope(item.TypeOfService.EffectScope, kind) || item.TypeOfService.EffectAction == ServiceEffectAction.None)
                continue;

            var deltaMonths = item.TypeOfService.EffectAction == ServiceEffectAction.Add
                ? -item.CountOfMonth!.Value
                : item.CountOfMonth!.Value;
            var before = currentDate;
            currentDate = ApplyMonthDelta(currentDate, deltaMonths);

            details.Add(CreateDetail(
                employee.Id,
                kind,
                "SERVICE",
                nameof(ServiceCalculation),
                item.Id.ToString(),
                $"احتساب خدمة ({item.TypeOfService.Name}) بمقدار {item.CountOfMonth} شهر.",
                before,
                currentDate,
                deltaMonths,
                0));
        }

        return currentDate;
    }

    private static DateOnly ApplyThanksAndSeniorityAdjustments(
        Employees employee,
        DateOnly periodStart,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details,
        out List<ThanksAndSeniority> consumedThanks,
        out List<ThanksAndSeniority> applicableThanks)
    {
        consumedThanks = new List<ThanksAndSeniority>();

        applicableThanks = employee.ThanksAndSeniority?
            .Where(x => !x.IsDeleted && !x.IsConsumed && x.CountOfMonths > 0 && x.DateOfBook >= periodStart && x.DateOfBook <= currentDate)
            .OrderBy(x => x.DateOfBook)
            .ThenBy(x => x.CreateAt)
            .ToList() ?? new List<ThanksAndSeniority>();

        foreach (var item in applicableThanks)
        {
            if (item.TypeOfBookId > 0 && item.TypeOfSeniorityId == 0)
            {
                if (item.CountOfMonths != 1 && item.CountOfMonths != 6 && item.CountOfMonths != 12)
                {
                    details.Add(CreateDetail(
                        employee.Id,
                        PromotionAllowanceCalculationKind.Promotion,
                        "THANKS_VALIDATION_WARNING",
                        nameof(ThanksAndSeniority),
                        item.Id.ToString(),
                        $"كتاب شكر رقم {item.BookNo} تم تجاوزه: القيمة {item.CountOfMonths} شهر غير مقبولة (المسموح: 1، 6، 12 شهر).",
                        currentDate,
                        currentDate,
                        0,
                        0));
                    continue;
                }
            }

            var before = currentDate;
            currentDate = ApplyMonthDelta(currentDate, -item.CountOfMonths);
            consumedThanks.Add(item);

            var stepCode = item.TypeOfSeniorityId > 0 ? "SENIORITY" : "THANKS";
            var reason = item.TypeOfSeniorityId > 0
                ? $"قدم ضمن فترة الدرجة الحالية خفّض الاستحقاق {item.CountOfMonths} شهر."
                : $"كتاب شكر رقم {item.BookNo} ضمن فترة الدرجة الحالية خفّض الاستحقاق {item.CountOfMonths} شهر.";

            details.Add(CreateDetail(
                employee.Id,
                PromotionAllowanceCalculationKind.Promotion,
                stepCode,
                nameof(ThanksAndSeniority),
                item.Id.ToString(),
                reason,
                before,
                currentDate,
                -item.CountOfMonths,
                0));
        }

        return currentDate;
    }

    private static DateOnly ApplyDisciplinaryAdjustments(
        Employees employee,
        PromotionAllowanceCalculationKind kind,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details)
    {
        foreach (var item in employee.EmployeeDisciplinary?
                     .Where(x => !x.IsDeleted && x.TypeOfDisciplinary != null)
                     .OrderBy(x => x.BookDate ?? DateOnly.MinValue)
                     .ThenBy(x => x.CreateAt) ?? Enumerable.Empty<EmployeeDisciplinary>())
        {
            var applies = kind == PromotionAllowanceCalculationKind.Promotion
                ? item.TypeOfDisciplinary.AffectsPromotion
                : item.TypeOfDisciplinary.AffectsAllowance;

            if (!applies)
                continue;

            var delayDays = item.CountOfDayDelay ?? item.TypeOfDisciplinary.DefaultDelayDays ?? item.TypeOfDisciplinary.CountOfDayDelay;
            if (delayDays <= 0)
                continue;

            var before = currentDate;
            currentDate = ApplyDayDelta(currentDate, delayDays);
            details.Add(CreateDetail(
                employee.Id,
                kind,
                "DISCIPLINARY",
                nameof(EmployeeDisciplinary),
                item.Id.ToString(),
                $"العقوبة أخّرت الاستحقاق {delayDays} يوم.",
                before,
                currentDate,
                0,
                delayDays));
        }

        return currentDate;
    }

    private static DateOnly ApplyLeaveAdjustments(
        Employees employee,
        PromotionAllowanceCalculationKind kind,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details)
    {
        foreach (var item in employee.Leaves?
                     .Where(x => !x.IsDeleted && IsLeaveImpactful(x, kind))
                     .OrderBy(x => x.FromDate ?? DateOnly.MinValue)
                     .ThenBy(x => x.CreateAt) ?? Enumerable.Empty<Leaves>())
        {
            var delayDays = ResolveLeaveDelayDays(item);
            if (delayDays <= 0)
                continue;

            var before = currentDate;
            currentDate = ApplyDayDelta(currentDate, delayDays);
            details.Add(CreateDetail(
                employee.Id,
                kind,
                "LEAVE",
                nameof(Leaves),
                item.Id.ToString(),
                $"الإجازة أثّرت على الاستحقاق وأخّرته {delayDays} يوم.",
                before,
                currentDate,
                0,
                delayDays));
        }

        return currentDate;
    }

    private static int ResolveLeaveDelayDays(Leaves leave)
    {
        if (leave.DelayDaysOverride.HasValue)
            return leave.DelayDaysOverride.Value;

        if (!leave.DelayWholeDuration)
            return 0;

        if (leave.CountOfDays.HasValue && leave.CountOfDays.Value > 0)
            return leave.CountOfDays.Value;

        if (leave.FromDate.HasValue && leave.ToDate.HasValue && leave.ToDate >= leave.FromDate)
            return leave.ToDate.Value.DayNumber - leave.FromDate.Value.DayNumber + 1;

        return 0;
    }

    private static DateOnly ApplyStudyLeaveAdjustments(
        Employees employee,
        PromotionAllowanceCalculationKind kind,
        DateOnly currentDate,
        List<PromotionAllowanceCalculationDetail> details)
    {
        foreach (var item in employee.StudyLeave?
                     .Where(x => !x.IsDeleted && IsStudyLeaveImpactful(x, kind))
                     .OrderBy(x => x.HireDate ?? DateOnly.MinValue)
                     .ThenBy(x => x.CreateAt) ?? Enumerable.Empty<StudyLeave>())
        {
            var delayMonths = item.DelayMonthsOverride ?? item.StudyPeriodTime ?? 0;
            if (delayMonths <= 0)
                continue;

            var before = currentDate;
            currentDate = ApplyMonthDelta(currentDate, delayMonths);
            details.Add(CreateDetail(
                employee.Id,
                kind,
                "STUDY_LEAVE",
                nameof(StudyLeave),
                item.Id.ToString(),
                $"الإجازة الدراسية أثّرت على الاستحقاق وأخّرته {delayMonths} شهر.",
                before,
                currentDate,
                delayMonths,
                0));
        }

        return currentDate;
    }

    private static string BuildSummary(
        DateOnly promotionDate,
        IEnumerable<PromotionAllowanceCalculationDetail> details)
    {
        var reasons = details
            .Where(x => x.StepCode != "BASE_RULE")
            .Select(x => x.Reason)
            .Distinct()
            .Take(5)
            .ToList();

        var reasonsText = reasons.Count == 0
            ? "بدون تعديلات إضافية."
            : string.Join(" | ", reasons);

        return $"الترفيع: {promotionDate:yyyy-MM-dd}. {reasonsText}";
    }

    private static string BuildAllowanceSummary(
        DateOnly allowanceDate,
        IEnumerable<PromotionAllowanceCalculationDetail> details)
    {
        var reasons = details
            .Where(x => x.CalculationKind == PromotionAllowanceCalculationKind.Allowance && x.StepCode != "BASE_RULE")
            .Select(x => x.Reason)
            .Distinct()
            .Take(5)
            .ToList();

        var reasonsText = reasons.Count == 0
            ? "بدون تعديلات إضافية."
            : string.Join(" | ", reasons);

        return $"العلاوة السنوية: {allowanceDate:yyyy-MM-dd}. {reasonsText}";
    }
}
