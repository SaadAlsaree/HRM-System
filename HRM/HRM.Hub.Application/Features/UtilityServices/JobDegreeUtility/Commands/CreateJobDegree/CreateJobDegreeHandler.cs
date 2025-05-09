namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Commands.CreateJobDegree;
public class CreateJobDegreeHandler : CreateHandler<JobDegree, CreateJobDegreeCommend>, IRequestHandler<CreateJobDegreeCommend, Response<bool>>
{

    private readonly IBaseRepository<JobDegree> _repositoryJobDegree;
    private int _index = 1;
    public CreateJobDegreeHandler(IBaseRepository<JobDegree> repositoryJobDegree)
        : base(repositoryJobDegree) 
    { 
        _repositoryJobDegree = repositoryJobDegree;
    }

    protected override Expression<Func<JobDegree, bool>> ExistencePredicate(CreateJobDegreeCommend request) => x => x.Name == request.Name;

    protected override JobDegree MapToEntity(CreateJobDegreeCommend request)
    {
        return new JobDegree
        {
            Name = request.Name,
            IncreaseAmount = request.IncreaseAmount,
            Index = _index,
        };
    }

    public async Task<Response<bool>> Handle(CreateJobDegreeCommend request, CancellationToken cancellationToken)
    {
        var getIndex = await _repositoryJobDegree.Query(z=>z.IsDeleted == false).MaxAsync(z => (int?)z.Index, cancellationToken: cancellationToken);
        if (getIndex != null)
            _index = getIndex.Value + 1;
        return await HandleBase(request, cancellationToken);
    }
}
