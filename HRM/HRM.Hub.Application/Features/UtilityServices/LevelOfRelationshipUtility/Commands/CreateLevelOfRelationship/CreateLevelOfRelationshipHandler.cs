using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.LevelOfRelationshipUtility.Commands.CreateLevelOfRelationship
{
    public class CreateLevelOfRelationshipHandler : CreateHandler<LevelOfRelationship, CreateLevelOfRelationshipCommend>, IRequestHandler<CreateLevelOfRelationshipCommend, Response<bool>>
    {
        public CreateLevelOfRelationshipHandler(IBaseRepository<LevelOfRelationship> repositoryLevelOfRelationship)
            : base(repositoryLevelOfRelationship) { }

        protected override Expression<Func<LevelOfRelationship, bool>> ExistencePredicate(CreateLevelOfRelationshipCommend request) => x => x.Name == request.Name;

        protected override LevelOfRelationship MapToEntity(CreateLevelOfRelationshipCommend request)
        {
            return new LevelOfRelationship
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreateLevelOfRelationshipCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
