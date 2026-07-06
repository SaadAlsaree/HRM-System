using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using HRM.Hub.Application.Extensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboardDetails
{
    public class GetPromotionDashboardDetailsHandler : IRequestHandler<GetPromotionDashboardDetailsQuery, Response<PagedResult<GetPromotionDashboardDetailsViewModel>>>
    {
        private readonly IBaseRepository<Promotion> _promotionRepository;
        private readonly IBaseRepository<LogPromotionWithholding> _withholdingRepository;
        private readonly IBaseRepository<Valuation> _valuationRepository;

        public GetPromotionDashboardDetailsHandler(
            IBaseRepository<Promotion> promotionRepository,
            IBaseRepository<LogPromotionWithholding> withholdingRepository,
            IBaseRepository<Valuation> valuationRepository)
        {
            _promotionRepository = promotionRepository;
            _withholdingRepository = withholdingRepository;
            _valuationRepository = valuationRepository;
        }

        public async Task<Response<PagedResult<GetPromotionDashboardDetailsViewModel>>> Handle(GetPromotionDashboardDetailsQuery request, CancellationToken cancellationToken)
        {
            var year = request.Year ?? DateTime.Today.Year;
            var month = request.Month;
            var today = DateOnly.FromDateTime(DateTime.Today);

            IQueryable<Promotion> query = _promotionRepository.GetQueryable()
                .Include(x => x.Employee)
                .Include(x => x.JobDegree)
                .Where(x => !x.IsDeleted);

            var items = Enumerable.Empty<GetPromotionDashboardDetailsViewModel>().AsQueryable();
            int totalCount = 0;

            switch (request.FilterType)
            {
                case DashboardFilterType.DueThisMonth:
                    var targetMonthDue = month ?? DateTime.Today.Month;
                    query = query.Where(x => (x.DueDateDegree != null && x.DueDateDegree.Value.Year == year && x.DueDateDegree.Value.Month == targetMonthDue) ||
                                             (x.DueDateCategory != null && x.DueDateCategory.Value.Year == year && x.DueDateCategory.Value.Month == targetMonthDue));
                    break;
                case DashboardFilterType.Completed:
                    var targetMonthComp = month;
                    query = query.Where(x => x.StatusId == Status.ActionTaken && x.CreateAt.Year == year);
                    if (targetMonthComp.HasValue)
                    {
                        query = query.Where(x => x.CreateAt.Month == targetMonthComp.Value);
                    }
                    break;
                case DashboardFilterType.Pending:
                    query = query.Where(x => x.StatusId == Status.Pending || x.StatusId == Status.UnderVerification || x.StatusId == Status.Unverified);
                    break;
                case DashboardFilterType.Overdue:
                    query = query.Where(x => x.StatusId != Status.ActionTaken && x.StatusId != Status.Archived &&
                                             ((x.DueDateDegree != null && x.DueDateDegree < today) ||
                                              (x.DueDateCategory != null && x.DueDateCategory < today)));
                    break;
                case DashboardFilterType.Withheld:
                    var withheldQuery = _withholdingRepository.GetQueryable()
                        .Include(x => x.Employee)
                        .Where(x => !x.IsDeleted && x.CreateAt.Year == year);
                    if (month.HasValue)
                    {
                        withheldQuery = withheldQuery.Where(x => x.CreateAt.Month == month.Value);
                    }
                    totalCount = await withheldQuery.CountAsync(cancellationToken);
                    var withheldList = await withheldQuery
                        .Skip((request.Page - 1) * request.PageSize)
                        .Take(request.PageSize)
                        .Select(x => new GetPromotionDashboardDetailsViewModel
                        {
                            EmployeeId = x.EmployeeId,
                            FullName = x.Employee != null ? x.Employee.FullName : "غير محدد",
                            JobDegreeName = "غير محدد", // Can be joined if needed
                            DueDate = null,
                            StatusId = Status.ActionTaken,
                            StatusName = "محجوبة",
                            AdditionalInfo = x.ReasonForWithholding
                        }).ToListAsync(cancellationToken);
                    
                    return new Response<PagedResult<GetPromotionDashboardDetailsViewModel>>
                    {
                        Data = new PagedResult<GetPromotionDashboardDetailsViewModel>
                        {
                            Items = withheldList,
                            TotalCount = totalCount
                        },
                        Succeeded = true
                    };

                case DashboardFilterType.MissingEvaluations:
                    var duePromotionEmployeeIds = await _promotionRepository.GetQueryable()
                        .Where(x => !x.IsDeleted && x.StatusId != Status.ActionTaken && 
                                    (x.DueDateDegree.Value.Year == year || x.DueDateCategory.Value.Year == year))
                        .Select(x => x.Employee.Id)
                        .ToListAsync(cancellationToken);
                    
                    var employeesWithEvaluationThisYear = await _valuationRepository.GetQueryable()
                        .Where(x => !x.IsDeleted && x.ValuationDate.HasValue && x.ValuationDate.Value.Year == year)
                        .Select(x => x.EmployeeId)
                        .Distinct()
                        .ToListAsync(cancellationToken);

                    var missingEvalIds = duePromotionEmployeeIds.Except(employeesWithEvaluationThisYear).ToList();
                    query = query.Where(x => missingEvalIds.Contains(x.Employee.Id));
                    break;

                default:
                    return new Response<PagedResult<GetPromotionDashboardDetailsViewModel>>
                    {
                        Data = new PagedResult<GetPromotionDashboardDetailsViewModel> { Items = [], TotalCount = 0 },
                        Succeeded = true
                    };
            }

            totalCount = await query.CountAsync(cancellationToken);

            var promotionList = await query
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new GetPromotionDashboardDetailsViewModel
                {
                    EmployeeId = x.Employee.Id,
                    FullName = x.Employee != null ? x.Employee.FullName : "غير محدد",
                    JobDegreeName = x.JobDegree != null ? x.JobDegree.Name : "غير محدد",
                    DueDate = x.DueDateDegree ?? x.DueDateCategory,
                    StatusId = x.StatusId,
                    StatusName = x.StatusId.ToString(), // Or localized if you have a helper
                    AdditionalInfo = ""
                }).ToListAsync(cancellationToken);

            return new Response<PagedResult<GetPromotionDashboardDetailsViewModel>>
            {
                Data = new PagedResult<GetPromotionDashboardDetailsViewModel>
                {
                    Items = promotionList,
                    TotalCount = totalCount
                },
                Succeeded = true
            };
        }
    }
}
