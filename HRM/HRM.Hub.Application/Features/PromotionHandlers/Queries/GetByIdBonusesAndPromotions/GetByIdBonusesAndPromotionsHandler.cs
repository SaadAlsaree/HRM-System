namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetByIdBonusesAndPromotions;
public class GetByIdBonusesAndPromotionsHandler : IRequestHandler<GetByIdBonusesAndPromotionsQuery, Response<GetByIdBonusesAndPromotionsViewModel>>

{
    private readonly IBaseRepository<Promotion> _repository;
    private readonly IBaseRepository<JobCategory> _repositoryJobCategory;
    private readonly IBaseRepository<JobDegree> _repositoryJobDegree;
    public GetByIdBonusesAndPromotionsHandler(IBaseRepository<Promotion> repository, IBaseRepository<JobCategory> repositoryJobCategory, IBaseRepository<JobDegree> repositoryJobDegree)
    {
        _repositoryJobCategory = repositoryJobCategory;
        _repositoryJobDegree = repositoryJobDegree;
        _repository = repository;   
    }
    public async Task<Response<GetByIdBonusesAndPromotionsViewModel>> Handle(GetByIdBonusesAndPromotionsQuery request, CancellationToken cancellationToken)
    {
        var currentDate = DateOnly.FromDateTime(DateTime.Now);
        var baseQuery = _repository.Query(filter: x => !x.IsDeleted && !x.StopPromotion);

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
        var query = baseQuery.Select(x => new GetByIdBonusesAndPromotionsViewModel
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

        var result = await query.FirstOrDefaultAsync(cancellationToken);
        if (result == null)
            return Response<GetByIdBonusesAndPromotionsViewModel>.Fail(new MessageResponse() { Message = "لا توجد بيانات للعرض , تاريخ التسكين اقل من الوقت الحالي",Code = "NotFound" });
        // Use dictionary for fast lookups
        var getJobCategories = await _repositoryJobCategory
            .Query(x => x.StatusId == Status.Active && !x.IsDeleted)
            .ToDictionaryAsync(x => x.Index, x => x, cancellationToken);

        var getJobDegrees = await _repositoryJobDegree
            .Query(x => x.StatusId == Status.Active && !x.IsDeleted)
            .ToDictionaryAsync(x => x.Index, x => x, cancellationToken);

        if (request.TypeOfPromotions == 1 && getJobCategories.TryGetValue(result.NextIndexJobCategory, out var category))
        {
            result.NewJobCategoryId = category.Id;
            result.NewJobCategoryName = category.Name;
            result.NewDueDateOfJobCategory = result.CurrentDueDateOfJobCategory?.AddMonths(category.NextPromotion);
        }
        else if (request.TypeOfPromotions == 2 && getJobDegrees.TryGetValue(result.NextIndexJobDegree, out var degree))
        {
            result.NewJobDegreeId = degree.Id;
            result.NewJobDegreeName = degree.Name;
            result.NewDueDateOfJobDegree = result.CurrentDueDateOfJobDegree?.AddMonths(degree.NextPromotion);
        }

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}