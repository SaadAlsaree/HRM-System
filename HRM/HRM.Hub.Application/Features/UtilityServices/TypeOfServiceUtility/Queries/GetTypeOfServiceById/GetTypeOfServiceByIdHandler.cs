using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceById;
public class GetTypeOfServiceByIdHandler : GetByIdHandler<TypeOfService, GetTypeOfServiceByIdViewModel, GetTypeOfServiceByIdQuery>, IRequestHandler<GetTypeOfServiceByIdQuery, Response<GetTypeOfServiceByIdViewModel>>
{
    public GetTypeOfServiceByIdHandler(IBaseRepository<TypeOfService> repositoryTypeOfService)
        : base(repositoryTypeOfService) { }

    public override Expression<Func<TypeOfService, bool>> IdPredicate(GetTypeOfServiceByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfService, GetTypeOfServiceByIdViewModel>> Selector => a => new GetTypeOfServiceByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfServiceByIdViewModel>> Handle(GetTypeOfServiceByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
