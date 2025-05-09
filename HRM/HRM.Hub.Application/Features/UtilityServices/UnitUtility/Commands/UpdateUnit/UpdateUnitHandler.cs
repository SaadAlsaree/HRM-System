using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Commands.UpdateUnit
{
    public class UpdateUnitHandler :
        UpdateHandler<Units, UpdateUnitCommend>,
        IRequestHandler<UpdateUnitCommend, Response<bool>>
    {
        public UpdateUnitHandler(IBaseRepository<Units> repositoryUnit)
            : base(repositoryUnit)
        {
        }

        public override Expression<Func<Units, bool>>
            EntityPredicate(UpdateUnitCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateUnitCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}