using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeById;
public class GetJobDegreeByIdHandler : GetByIdHandler<JobDegree, GetJobDegreeByIdViewModel, GetJobDegreeByIdQuery>, IRequestHandler<GetJobDegreeByIdQuery, Response<GetJobDegreeByIdViewModel>>
{
    public GetJobDegreeByIdHandler(IBaseRepository<JobDegree> repositoryJobDegree)
        : base(repositoryJobDegree) { }

    public override Expression<Func<JobDegree, bool>> IdPredicate(GetJobDegreeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<JobDegree, GetJobDegreeByIdViewModel>> Selector => a => new GetJobDegreeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetJobDegreeByIdViewModel>> Handle(GetJobDegreeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
