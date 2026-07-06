using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboard
{
    public class GetPromotionDashboardHandler : IRequestHandler<GetPromotionDashboardQuery, Response<GetPromotionDashboardViewModel>>
    {
        private readonly IBaseRepository<Promotion> _promotionRepository;
        private readonly IBaseRepository<LogPromotionWithholding> _withholdingRepository;
        private readonly IBaseRepository<Valuation> _valuationRepository;
        private readonly IBaseRepository<ThanksAndSeniority> _thanksRepository;
        private readonly IBaseRepository<ServiceCalculation> _serviceCalculationRepository;
        private readonly IBaseRepository<CorrectingAcademicAchievements> _correctingAcademicAchievementsRepository;
        private readonly IBaseRepository<ChangeDegrees> _changeDegreesRepository;

        public GetPromotionDashboardHandler(
            IBaseRepository<Promotion> promotionRepository,
            IBaseRepository<LogPromotionWithholding> withholdingRepository,
            IBaseRepository<Valuation> valuationRepository,
            IBaseRepository<ThanksAndSeniority> thanksRepository,
            IBaseRepository<ServiceCalculation> serviceCalculationRepository,
            IBaseRepository<CorrectingAcademicAchievements> correctingAcademicAchievementsRepository,
            IBaseRepository<ChangeDegrees> changeDegreesRepository)
        {
            _promotionRepository = promotionRepository;
            _withholdingRepository = withholdingRepository;
            _valuationRepository = valuationRepository;
            _thanksRepository = thanksRepository;
            _serviceCalculationRepository = serviceCalculationRepository;
            _correctingAcademicAchievementsRepository = correctingAcademicAchievementsRepository;
            _changeDegreesRepository = changeDegreesRepository;
        }

        public async Task<Response<GetPromotionDashboardViewModel>> Handle(GetPromotionDashboardQuery request, CancellationToken cancellationToken)
        {
            var year = request.Year ?? DateTime.Today.Year;
            var month = request.Month;
            
            var targetYear = year;
            var today = DateOnly.FromDateTime(DateTime.Today);

            var viewModel = new GetPromotionDashboardViewModel();

            // 1. Promotions Base Query
            var promotionsQuery = _promotionRepository.GetQueryable();
            var promotionsBase = await promotionsQuery
                .Where(x => !x.IsDeleted)
                .Select(x => new 
                {
                    x.Id,
                    x.StatusId,
                    x.DueDateDegree,
                    x.DueDateCategory,
                    x.CreateAt,
                    EmployeeName = x.Employee != null ? x.Employee.FullName : "غير محدد"
                }).ToListAsync(cancellationToken);

            // Filter for Target Year & Month for specific metrics
            var promotionsThisYear = promotionsBase.Where(x => x.DueDateDegree?.Year == targetYear || x.DueDateCategory?.Year == targetYear).ToList();
            var promotionsTargetMonth = promotionsThisYear;
            if (month.HasValue)
            {
                promotionsTargetMonth = promotionsThisYear.Where(x => x.DueDateDegree?.Month == month || x.DueDateCategory?.Month == month).ToList();
            }
            else
            {
                promotionsTargetMonth = promotionsThisYear.Where(x => x.DueDateDegree?.Month == DateTime.Today.Month || x.DueDateCategory?.Month == DateTime.Today.Month).ToList();
            }

            // Summary Cards
            viewModel.TotalDueThisMonth = promotionsTargetMonth.Count;
            viewModel.TotalCompleted = promotionsBase.Count(x => x.StatusId == Status.ActionTaken && x.CreateAt.Year == targetYear && (!month.HasValue || x.CreateAt.Month == month));
            viewModel.TotalPending = promotionsBase.Count(x => (x.StatusId == Status.Pending || x.StatusId == Status.UnderVerification || x.StatusId == Status.Unverified));
            
            // Overdue
            viewModel.TotalOverdue = promotionsBase.Count(x => x.StatusId != Status.ActionTaken && x.StatusId != Status.Archived && 
                                                               ((x.DueDateDegree.HasValue && x.DueDateDegree.Value < today) || 
                                                                (x.DueDateCategory.HasValue && x.DueDateCategory.Value < today)));

            // Withholding
            var withholdings = await _withholdingRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.CreateAt.Year == targetYear)
                .ToListAsync(cancellationToken);
            if (month.HasValue)
                withholdings = withholdings.Where(x => x.CreateAt.Month == month).ToList();
            viewModel.TotalWithheld = withholdings.Count;

            // Missing Evaluations for overdue or due promotions this year
            var duePromotionEmployeeIds = await _promotionRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.StatusId != Status.ActionTaken && (x.DueDateDegree.Value.Year == targetYear || x.DueDateCategory.Value.Year == targetYear))
                .Select(x => x.Employee.Id)
                .ToListAsync(cancellationToken);
            
            var employeesWithEvaluationThisYear = await _valuationRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.ValuationDate.HasValue && x.ValuationDate.Value.Year == targetYear)
                .Select(x => x.EmployeeId)
                .Distinct()
                .ToListAsync(cancellationToken);

            viewModel.TotalEvaluationsMissing = duePromotionEmployeeIds.Except(employeesWithEvaluationThisYear).Count();

            // Exceptional Adjustments
            viewModel.TotalSeniorityMonthsGranted = await _thanksRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.DateOfBook.Year == targetYear && x.CountOfMonths > 0)
                .SumAsync(x => x.CountOfMonths, cancellationToken);
            viewModel.TotalServiceCalculations = await _serviceCalculationRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.CreateAt.Year == targetYear).CountAsync(cancellationToken);
            viewModel.TotalCertificateCalculations = await _correctingAcademicAchievementsRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.CreateAt.Year == targetYear).CountAsync(cancellationToken);
            viewModel.TotalDegreeAccelerations = await _changeDegreesRepository.GetQueryable()
                .Where(x => !x.IsDeleted && x.CreateAt.Year == targetYear).CountAsync(cancellationToken);

            // Charts Data
            viewModel.StatusDistribution = promotionsBase
                .GroupBy(x => x.StatusId)
                .Select(g => new StatusDistributionItem 
                { 
                    StatusName = g.Key.ToString(), 
                    Count = g.Count() 
                }).ToList();

            var completedPromotionsThisYear = promotionsBase.Where(x => x.StatusId == Status.ActionTaken && x.CreateAt.Year == targetYear).ToList();
            for (int m = 1; m <= 12; m++)
            {
                viewModel.MonthlyCompletedPromotions.Add(new MonthlyCountItem
                {
                    Month = m,
                    MonthName = new DateTime(targetYear, m, 1).ToString("MMM"),
                    Count = completedPromotionsThisYear.Count(x => x.CreateAt.Month == m)
                });
            }

            viewModel.WithholdingReasons = withholdings
                .GroupBy(x => string.IsNullOrEmpty(x.ReasonForWithholding) ? "أسباب أخرى" : x.ReasonForWithholding)
                .Select(g => new WithholdingReasonItem 
                { 
                    Reason = g.Key, 
                    Count = g.Count() 
                }).OrderByDescending(x => x.Count).Take(5).ToList();

            // Recent Activity
            var recentPromotions = promotionsBase
                .OrderByDescending(x => x.CreateAt)
                .Take(5)
                .Select(x => new RecentActivityItem
                {
                    EmployeeName = x.EmployeeName,
                    ActionType = "إضافة ترقية جديدة",
                    ActionDate = x.CreateAt,
                    Details = $"حالة الترقية: {x.StatusId}"
                });

            var recentWithholdings = withholdings
                .OrderByDescending(x => x.CreateAt)
                .Take(5)
                .Select(x => new RecentActivityItem
                {
                    EmployeeName = x.Employee != null ? x.Employee.FullName : "غير محدد",
                    ActionType = "حجب ترقية",
                    ActionDate = x.CreateAt,
                    Details = $"السبب: {x.ReasonForWithholding}"
                });

            viewModel.RecentActivities = recentPromotions.Concat(recentWithholdings)
                .OrderByDescending(x => x.ActionDate)
                .Take(7)
                .ToList();

            return SuccessMessage.Get.ToSuccessMessage(viewModel);
        }
    }
}
