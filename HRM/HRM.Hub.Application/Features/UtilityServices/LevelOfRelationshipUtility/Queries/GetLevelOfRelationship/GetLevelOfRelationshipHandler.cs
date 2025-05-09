using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Queries.GetLevelOfRelationship
{
    public class GetLevelOfRelationshipHandler : GetAllWithCountHandler<LevelOfRelationship, GetLevelOfRelationshipViewModel, GetLevelOfRelationshipQuery>, IRequestHandler<GetLevelOfRelationshipQuery, Response<PagedResult<GetLevelOfRelationshipViewModel>>>
    {
        public GetLevelOfRelationshipHandler(IBaseRepository<LevelOfRelationship> repositoryLevelOfRelationship)
            : base(repositoryLevelOfRelationship) { }

        public override Expression<Func<LevelOfRelationship, GetLevelOfRelationshipViewModel>> Selector => z => new GetLevelOfRelationshipViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<LevelOfRelationship>, IOrderedQueryable<LevelOfRelationship>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetLevelOfRelationshipViewModel>>> Handle(GetLevelOfRelationshipQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

