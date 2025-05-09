using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Commands.UpdatePosition
{
    public class UpdatePositionHandler :
        UpdateHandler<Position, UpdatePositionCommend>,
        IRequestHandler<UpdatePositionCommend, Response<bool>>
    {
        public UpdatePositionHandler(IBaseRepository<Position> repositoryPosition)
            : base(repositoryPosition)
        {
        }

        public override Expression<Func<Position, bool>>
            EntityPredicate(UpdatePositionCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdatePositionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}