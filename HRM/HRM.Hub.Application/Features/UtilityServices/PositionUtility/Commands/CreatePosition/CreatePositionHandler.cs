using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Commands.CreatePosition
{
    public class CreatePositionHandler : CreateHandler<Position, CreatePositionCommend>, IRequestHandler<CreatePositionCommend, Response<bool>>
    {
        public CreatePositionHandler(IBaseRepository<Position> repositoryPosition)
            : base(repositoryPosition) { }

        protected override Expression<Func<Position, bool>> ExistencePredicate(CreatePositionCommend request) => x => x.Name == request.Name;

        protected override Position MapToEntity(CreatePositionCommend request)
        {
            return new Position
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreatePositionCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
