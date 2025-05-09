using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Queries.GetLevelOfRelationshipList;

public class GetLevelOfRelationshipListHandler : GetAllHandler<LevelOfRelationship, GetLevelOfRelationshipListViewModel, GetLevelOfRelationshipListQuery>, IRequestHandler<GetLevelOfRelationshipListQuery, Response<IEnumerable<GetLevelOfRelationshipListViewModel>>>
{
    public GetLevelOfRelationshipListHandler(IBaseRepository<LevelOfRelationship> repositoryLevelOfRelationshipList)
        : base(repositoryLevelOfRelationshipList) { }

    public override Expression<Func<LevelOfRelationship, GetLevelOfRelationshipListViewModel>> Selector => z => new GetLevelOfRelationshipListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<LevelOfRelationship>, IOrderedQueryable<LevelOfRelationship>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetLevelOfRelationshipListViewModel>>> Handle(GetLevelOfRelationshipListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}