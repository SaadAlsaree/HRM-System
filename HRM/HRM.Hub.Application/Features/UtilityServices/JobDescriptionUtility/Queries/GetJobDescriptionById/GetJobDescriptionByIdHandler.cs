using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionById;
public class GetJobDescriptionByIdHandler : GetByIdHandler<JobDescription, GetJobDescriptionByIdViewModel, GetJobDescriptionByIdQuery>, IRequestHandler<GetJobDescriptionByIdQuery, Response<GetJobDescriptionByIdViewModel>>
{
    public GetJobDescriptionByIdHandler(IBaseRepository<JobDescription> repositoryJobDescription)
        : base(repositoryJobDescription) { }

    public override Expression<Func<JobDescription, bool>> IdPredicate(GetJobDescriptionByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<JobDescription, GetJobDescriptionByIdViewModel>> Selector => a => new GetJobDescriptionByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetJobDescriptionByIdViewModel>> Handle(GetJobDescriptionByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
