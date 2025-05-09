using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritory
{
    public class GetTerritoryHandler : GetAllWithCountHandler<Territory, GetTerritoryViewModel, GetTerritoryQuery>, IRequestHandler<GetTerritoryQuery, Response<PagedResult<GetTerritoryViewModel>>>
    {
        public GetTerritoryHandler(IBaseRepository<Territory> repositoryTerritory)
            : base(repositoryTerritory) { }

        public override Expression<Func<Territory, GetTerritoryViewModel>> Selector => z => new GetTerritoryViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Territory>, IOrderedQueryable<Territory>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTerritoryViewModel>>> Handle(GetTerritoryQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

