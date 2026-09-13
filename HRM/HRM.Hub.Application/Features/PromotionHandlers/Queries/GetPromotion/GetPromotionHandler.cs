using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using HRM.Hub.Application.Extensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using HRM.Hub.Domain.Common;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotion;
public class GetPromotionHandler  : GetAllWithCountHandler<Promotion, GetPromotionViewModel, GetPromotionQuery>, IRequestHandler<GetPromotionQuery, Response<PagedResult<GetPromotionViewModel>>>
{
    private readonly IBaseRepository<JobDegree> _jobDegreeRepository;
    private readonly IBaseRepository<JobCategory> _jobCategoryRepository;

    public GetPromotionHandler(
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<JobDegree> jobDegreeRepository,
        IBaseRepository<JobCategory> jobCategoryRepository)
        : base(repositoryPromotion) 
    { 
        _jobDegreeRepository = jobDegreeRepository;
        _jobCategoryRepository = jobCategoryRepository;
    }

    public override Expression<Func<Promotion, GetPromotionViewModel>> Selector => z => new GetPromotionViewModel()
    {
        Id = z.Id,
        Note = z.Note,
        Status = z.StatusId,
        DegreeFromId = z.JobDegreeId,
        DegreeFromName = z.JobDegree != null ? z.JobDegree.Name : string.Empty,
        DegreeToId = 0,
        DegreeToName = string.Empty,
        JobCategoryFromId = z.JobCategoryId,
        JobCategoryFromName = z.JobCategory != null ? z.JobCategory.Name : string.Empty,
        JobCategoryToId = 0,
        JobCategoryToName = string.Empty,
        FullName = z.Employee != null ? z.Employee.FullName : string.Empty,
        JobCode = z.Employee != null ? z.Employee.JobCode : string.Empty,
        LotNumber = z.Employee != null ? z.Employee.LotNumber : string.Empty,
        StatusName = string.Empty,
        EmployeeId = z.Employee != null ? z.Employee.Id : z.Id, // Since Promotion.Id is the FK
        DueDateDegree = z.DueDateDegree,
        DueDateCategory = z.DueDateCategory,
        ServiceRecycle = z.ServiceRecycle,
        SentPromotionGroupId = z.SentPromotionGroupId,
        SentPromotionGroupName = z.SentPromotionGroup != null ? z.SentPromotionGroup.GroupName : string.Empty,
    };

    public override Func<IQueryable<Promotion>, IOrderedQueryable<Promotion>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetPromotionViewModel>>> Handle(GetPromotionQuery request, CancellationToken cancellationToken)
    {
        var query = _repository.Query();

        if (request.EmployeeId != Guid.Empty)
            query = query.Where(z => z.Id == request.EmployeeId);

        if (request.Status != Status.None)
            query = query.Where(z => z.StatusId == request.Status);

        var count = await query.CountAsync(cancellationToken: cancellationToken);
        var result = await query
            .ApplyPagination(request)
            .Select(Selector)
            .ToListAsync(cancellationToken: cancellationToken);

        var jobDegrees = await _jobDegreeRepository.Query().ToListAsync(cancellationToken);
        var jobCategories = await _jobCategoryRepository.Query().ToListAsync(cancellationToken);

        foreach (var item in result)
        {
            item.StatusName = item.Status.GetDisplayName();
            
            if (item.DegreeFromId != null && item.DegreeFromId != 0)
            {
                var currentDegree = jobDegrees.FirstOrDefault(d => d.Id == item.DegreeFromId);
                if (currentDegree != null)
                {
                    var nextDegree = ResolveNextJobDegree(currentDegree, jobDegrees);
                    if (nextDegree != null)
                    {
                        item.DegreeToId = nextDegree.Id;
                        item.DegreeToName = nextDegree.Name ?? string.Empty;
                    }
                }
            }

            if (item.JobCategoryFromId != null && item.JobCategoryFromId != 0)
            {
                var currentCategory = jobCategories.FirstOrDefault(c => c.Id == item.JobCategoryFromId);
                if (currentCategory != null)
                {
                    var nextCategory = ResolveNextJobCategory(currentCategory, jobCategories);
                    if (nextCategory != null)
                    {
                        item.JobCategoryToId = nextCategory.Id;
                        item.JobCategoryToName = nextCategory.Name ?? string.Empty;
                    }
                }
            }
        }

        if (!result.Any())
            return ErrorsMessage.NotFoundData.ToErrorMessage<PagedResult<GetPromotionViewModel>>(null);

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetPromotionViewModel>
        {
            Items = result,
            TotalCount = count
        });
    }

    private static readonly System.Collections.Generic.Dictionary<string, int> DegreeNameRanks = new(System.StringComparer.OrdinalIgnoreCase)
    {
        { "العاشرة", 10 },
        { "التاسعة", 9 },
        { "الثامنة", 8 },
        { "السابعة", 7 },
        { "السادسة", 6 },
        { "الخامسة", 5 },
        { "الرابعة", 4 },
        { "الثالثة", 3 },
        { "الثانية", 2 },
        { "الأولى", 1 },
        { "الاولى", 1 }
    };

    private static int GetDegreeRank(JobDegree? degree)
    {
        if (degree == null)
            return 99;

        if (!string.IsNullOrWhiteSpace(degree.Name))
        {
            foreach (var kvp in DegreeNameRanks)
            {
                if (degree.Name.Contains(kvp.Key, StringComparison.OrdinalIgnoreCase))
                    return kvp.Value;
            }
        }

        if (degree.Index >= 1 && degree.Index <= 10)
            return degree.Index;

        return 99;
    }

    private static JobDegree? ResolveNextJobDegree(JobDegree currentDegree, System.Collections.Generic.List<JobDegree> allDegrees)
    {
        int currentRank = GetDegreeRank(currentDegree);

        // Grade 1 (الدرجة الأولى) is the highest civil service rank - no promotion above it
        if (currentRank <= 1)
            return null;

        if (currentRank <= 10)
        {
            int targetRank = currentRank - 1;

            // 1. Primary: match by semantic Arabic rank (العاشرة=10 -> التاسعة=9 -> الثامنة=8 -> ...)
            var targetByRank = allDegrees.FirstOrDefault(d => !d.IsDeleted && GetDegreeRank(d) == targetRank);
            if (targetByRank != null)
                return targetByRank;

            // 2. Secondary: match by Index == targetRank
            var targetByIndex = allDegrees.FirstOrDefault(d => !d.IsDeleted && d.Index == targetRank);
            if (targetByIndex != null)
                return targetByIndex;
        }

        // Fallback for custom degrees: next smaller index
        return allDegrees
            .Where(d => d.Id != currentDegree.Id && d.Index < currentDegree.Index && !d.IsDeleted)
            .OrderByDescending(d => d.Index)
            .FirstOrDefault();
    }

    private static JobCategory? ResolveNextJobCategory(JobCategory currentCategory, System.Collections.Generic.List<JobCategory> allCategories)
    {
        // Category / Stage ascends: 1 -> 2 -> 3 -> ... -> 11
        var nextByIndex = allCategories
            .Where(c => c.Id != currentCategory.Id && c.Index > currentCategory.Index && !c.IsDeleted)
            .OrderBy(c => c.Index)
            .FirstOrDefault();

        if (nextByIndex != null)
            return nextByIndex;

        return allCategories.FirstOrDefault(c => !c.IsDeleted && c.Index == currentCategory.Index + 1);
    }
}
