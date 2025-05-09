using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritoryList;

public class GetTerritoryListHandler : GetAllHandler<Territory, GetTerritoryListViewModel, GetTerritoryListQuery>, IRequestHandler<GetTerritoryListQuery, Response<IEnumerable<GetTerritoryListViewModel>>>
{
    public GetTerritoryListHandler(IBaseRepository<Territory> repositoryTerritoryList)
        : base(repositoryTerritoryList) { }

    public override Expression<Func<Territory, GetTerritoryListViewModel>> Selector => z => new GetTerritoryListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Territory>, IOrderedQueryable<Territory>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTerritoryListViewModel>>> Handle(GetTerritoryListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}