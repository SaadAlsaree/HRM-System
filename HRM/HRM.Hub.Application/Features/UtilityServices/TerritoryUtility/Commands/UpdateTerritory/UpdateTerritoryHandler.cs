using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Commands.UpdateTerritory
{
    public class UpdateTerritoryHandler :
        UpdateHandler<Territory, UpdateTerritoryCommend>,
        IRequestHandler<UpdateTerritoryCommend, Response<bool>>
    {
        public UpdateTerritoryHandler(IBaseRepository<Territory> repositoryTerritory)
            : base(repositoryTerritory)
        {
        }

        public override Expression<Func<Territory, bool>>
            EntityPredicate(UpdateTerritoryCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTerritoryCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}