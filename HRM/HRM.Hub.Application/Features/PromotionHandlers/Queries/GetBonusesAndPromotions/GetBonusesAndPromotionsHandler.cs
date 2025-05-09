namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetBonusesAndPromotions;
public class GetBonusesAndPromotionsHandler : IRequestHandler<GetBonusesAndPromotionsQuery, Response<PagedResult<GetBonusesAndPromotionsViewModel>>>

{
    private readonly IBaseRepository<Promotion> _repository;
    private readonly IBaseRepository<JobCategory> _repositoryJobCategory;
    private readonly IBaseRepository<JobDegree> _repositoryJobDegree;
    public GetBonusesAndPromotionsHandler(IBaseRepository<Promotion> repository, IBaseRepository<JobCategory> repositoryJobCategory, IBaseRepository<JobDegree> repositoryJobDegree)
    {
        _repositoryJobCategory = repositoryJobCategory;
        _repositoryJobDegree = repositoryJobDegree;
        _repository = repository;   
    }
    public async Task<Response<PagedResult<GetBonusesAndPromotionsViewModel>>> Handle(GetBonusesAndPromotionsQuery request, CancellationToken cancellationToken)
    {
        var currentDate = DateOnly.FromDateTime(DateTime.Now);
        var baseQuery = _repository.Query(filter: x => !x.IsDeleted && !x.StopPromotion && 
        (request.DirectorateId == -1 || x.Employee.ManagementInformation.DirectorateId == request.DirectorateId) &&
        (request.SubDirectorateId == -1 || x.Employee.ManagementInformation.SubDirectorateId == request.SubDirectorateId) &&
        (request.DepartmentId == -1 || x.Employee.ManagementInformation.DepartmentId == request.DepartmentId));

        // Apply filters as early as possible
        if (request.TypeOfPromotions == 1)
        {
            baseQuery = baseQuery.Where(x => x.DueDateCategory <= currentDate);
        }
        else if (request.TypeOfPromotions == 2)
        {
            baseQuery = baseQuery.Where(x => x.DueDateDegree <= currentDate);
        }

        // Include related entities using Eager Loading if applicable
        baseQuery = baseQuery.Include(x => x.Employee)
            .ThenInclude(x => x.ManagementInformation)
            .ThenInclude(x => x.JobTitle);
        if (request.CountOfEmployee != 0)
        {
            baseQuery = baseQuery.Take(request.CountOfEmployee).AsQueryable();
        }
        var query = baseQuery.Select(x => new GetBonusesAndPromotionsViewModel
        {
            CurrentDueDateOfJobDegree = x.DueDateDegree,
            CurrentDueDateOfJobCategory = x.DueDateCategory,
            CurrentJobCategoryId = x.JobCategoryId,
            CurrentJobCategoryName = x.JobCategory.Name,
            CurrentJobDegreeId = x.JobDegreeId,
            CurrentJobDegreeName = x.JobDegree.Name,
            EmployeeId = x.Id,
            FullName = x.Employee.FullName,
            Id = x.Id,
            JobCode = x.Employee.JobCode,
            JobTitleId = x.Employee.ManagementInformation.JobTitleId,
            JobTitleName = x.Employee.ManagementInformation.JobTitle.Name,
            LotNumber = x.Employee.LotNumber,
            NextIndexJobCategory = x.JobCategory.Index + 1,
            NextIndexJobDegree = x.JobDegree.Index + 1,
            Status = x.StatusId,
            Notes = x.Note,
        }).OrderBy(x => x.JobCode);

        var count = request.CountOfEmployee == 0 ? await query.CountAsync(cancellationToken) : request.CountOfEmployee;
        var result = await query.Skip((request.Page - 1) * request.PageSize).Take(request.PageSize).ToListAsync(cancellationToken);

        // Use dictionary for fast lookups
        var getJobCategories = await _repositoryJobCategory
            .Query(x => x.StatusId == Status.Active && !x.IsDeleted)
            .ToDictionaryAsync(x => x.Index, x => x, cancellationToken);

        var getJobDegrees = await _repositoryJobDegree
            .Query(x => x.StatusId == Status.Active && !x.IsDeleted)
            .ToDictionaryAsync(x => x.Index, x => x, cancellationToken);

        foreach (var item in result)
        {
            // Use dictionary lookup instead of FirstOrDefault for efficiency
            if (request.TypeOfPromotions == 1 && getJobCategories.TryGetValue(item.NextIndexJobCategory, out var category))
            {
                item.NewJobCategoryId = category.Id;
                item.NewJobCategoryName = category.Name;
                item.NewDueDateOfJobCategory = item.CurrentDueDateOfJobCategory?.AddMonths(category.NextPromotion);
            }
            else if (request.TypeOfPromotions == 2 && getJobDegrees.TryGetValue(item.NextIndexJobDegree, out var degree))
            {
                item.NewJobDegreeId = degree.Id;
                item.NewJobDegreeName = degree.Name;
                item.NewDueDateOfJobDegree = item.CurrentDueDateOfJobDegree?.AddMonths(degree.NextPromotion);
            }
        }

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetBonusesAndPromotionsViewModel>()
        {
            Items = result,
            TotalCount = count
        });
    }
}