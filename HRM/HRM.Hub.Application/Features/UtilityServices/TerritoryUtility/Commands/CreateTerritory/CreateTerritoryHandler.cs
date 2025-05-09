using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Commands.CreateTerritory
{
    public class CreateTerritoryHandler : CreateHandler<Territory, CreateTerritoryCommend>, IRequestHandler<CreateTerritoryCommend, Response<bool>>
    {
        public CreateTerritoryHandler(IBaseRepository<Territory> repositoryTerritory)
            : base(repositoryTerritory) { }

        protected override Expression<Func<Territory, bool>> ExistencePredicate(CreateTerritoryCommend request) => x => x.Name == request.Name;

        protected override Territory MapToEntity(CreateTerritoryCommend request)
        {
            return new Territory
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTerritoryCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
