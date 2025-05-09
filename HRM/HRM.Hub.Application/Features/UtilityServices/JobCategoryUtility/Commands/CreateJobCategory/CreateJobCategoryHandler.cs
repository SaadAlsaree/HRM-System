namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Commands.CreateJobCategory;
public class CreateJobCategoryHandler : CreateHandler<JobCategory, CreateJobCategoryCommend>, IRequestHandler<CreateJobCategoryCommend, Response<bool>>
{
    private readonly IBaseRepository<JobCategory> _repositoryJobCategory;
    private int _index = 1;
    public CreateJobCategoryHandler(IBaseRepository<JobCategory> repositoryJobCategory)
        : base(repositoryJobCategory)
    {
        _repositoryJobCategory = repositoryJobCategory;
    }

    protected override Expression<Func<JobCategory, bool>> ExistencePredicate(CreateJobCategoryCommend request) => x => x.Name == request.Name;

    protected override JobCategory MapToEntity(CreateJobCategoryCommend request)
    {
        return new JobCategory
        {
            DegreeId = request.DegreeId,
            IncreaseAmount = request.IncreaseAmount,
            Name = request.Name,
            Index = _index,
        };
    }

    public async Task<Response<bool>> Handle(CreateJobCategoryCommend request, CancellationToken cancellationToken)
    {
        var getIndex = await _repositoryJobCategory.Query(z => z.IsDeleted == false).MaxAsync(z => (int?)z.Index, cancellationToken: cancellationToken);
        if (getIndex != null)
            _index = getIndex.Value + 1;
        return await HandleBase(request, cancellationToken);

    }
}
