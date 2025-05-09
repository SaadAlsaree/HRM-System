using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Queries.GetLevelOfRelationshipById;
public class GetLevelOfRelationshipByIdHandler : GetByIdHandler<LevelOfRelationship, GetLevelOfRelationshipByIdViewModel, GetLevelOfRelationshipByIdQuery>, IRequestHandler<GetLevelOfRelationshipByIdQuery, Response<GetLevelOfRelationshipByIdViewModel>>
{
    public GetLevelOfRelationshipByIdHandler(IBaseRepository<LevelOfRelationship> repositoryLevelOfRelationship)
        : base(repositoryLevelOfRelationship) { }

    public override Expression<Func<LevelOfRelationship, bool>> IdPredicate(GetLevelOfRelationshipByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<LevelOfRelationship, GetLevelOfRelationshipByIdViewModel>> Selector => a => new GetLevelOfRelationshipByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetLevelOfRelationshipByIdViewModel>> Handle(GetLevelOfRelationshipByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
