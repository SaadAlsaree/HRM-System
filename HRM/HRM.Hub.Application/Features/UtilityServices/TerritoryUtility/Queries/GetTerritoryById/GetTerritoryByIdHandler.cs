using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritoryById;
public class GetTerritoryByIdHandler : GetByIdHandler<Territory, GetTerritoryByIdViewModel, GetTerritoryByIdQuery>, IRequestHandler<GetTerritoryByIdQuery, Response<GetTerritoryByIdViewModel>>
{
    public GetTerritoryByIdHandler(IBaseRepository<Territory> repositoryTerritory)
        : base(repositoryTerritory) { }

    public override Expression<Func<Territory, bool>> IdPredicate(GetTerritoryByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Territory, GetTerritoryByIdViewModel>> Selector => a => new GetTerritoryByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTerritoryByIdViewModel>> Handle(GetTerritoryByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
