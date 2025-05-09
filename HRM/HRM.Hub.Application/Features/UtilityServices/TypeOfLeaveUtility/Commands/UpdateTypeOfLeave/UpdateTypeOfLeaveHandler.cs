using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.UpdateTypeOfLeave
{
    public class UpdateTypeOfLeaveHandler :
        UpdateHandler<TypeOfLeave, UpdateTypeOfLeaveCommend>,
        IRequestHandler<UpdateTypeOfLeaveCommend, Response<bool>>
    {
        public UpdateTypeOfLeaveHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeave)
            : base(repositoryTypeOfLeave)
        {
        }

        public override Expression<Func<TypeOfLeave, bool>>
            EntityPredicate(UpdateTypeOfLeaveCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfLeaveCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}