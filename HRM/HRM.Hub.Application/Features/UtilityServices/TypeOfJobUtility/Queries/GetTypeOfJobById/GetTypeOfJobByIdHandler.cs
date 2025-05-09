using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobById;
public class GetTypeOfJobByIdHandler : GetByIdHandler<TypeOfJob, GetTypeOfJobByIdViewModel, GetTypeOfJobByIdQuery>, IRequestHandler<GetTypeOfJobByIdQuery, Response<GetTypeOfJobByIdViewModel>>
{
    public GetTypeOfJobByIdHandler(IBaseRepository<TypeOfJob> repositoryTypeOfJob)
        : base(repositoryTypeOfJob) { }

    public override Expression<Func<TypeOfJob, bool>> IdPredicate(GetTypeOfJobByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfJob, GetTypeOfJobByIdViewModel>> Selector => a => new GetTypeOfJobByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfJobByIdViewModel>> Handle(GetTypeOfJobByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
