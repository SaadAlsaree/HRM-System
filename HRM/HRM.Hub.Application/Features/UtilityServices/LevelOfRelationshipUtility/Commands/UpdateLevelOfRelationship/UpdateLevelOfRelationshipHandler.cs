using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Commands.UpdateLevelOfRelationship
{
    public class UpdateLevelOfRelationshipHandler :
        UpdateHandler<LevelOfRelationship, UpdateLevelOfRelationshipCommend>,
        IRequestHandler<UpdateLevelOfRelationshipCommend, Response<bool>>
    {
        public UpdateLevelOfRelationshipHandler(IBaseRepository<LevelOfRelationship> repositoryLevelOfRelationship)
            : base(repositoryLevelOfRelationship)
        {
        }

        public override Expression<Func<LevelOfRelationship, bool>>
            EntityPredicate(UpdateLevelOfRelationshipCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateLevelOfRelationshipCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}