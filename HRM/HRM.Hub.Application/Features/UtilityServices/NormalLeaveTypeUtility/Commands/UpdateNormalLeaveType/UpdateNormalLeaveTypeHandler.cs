using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Commands.UpdateNormalLeaveType
{
    public class UpdateNormalLeaveTypeHandler :
        UpdateHandler<NormalLeaveType, UpdateNormalLeaveTypeCommend>,
        IRequestHandler<UpdateNormalLeaveTypeCommend, Response<bool>>
    {
        public UpdateNormalLeaveTypeHandler(IBaseRepository<NormalLeaveType> repositoryNormalLeaveType)
            : base(repositoryNormalLeaveType)
        {
        }

        public override Expression<Func<NormalLeaveType, bool>>
            EntityPredicate(UpdateNormalLeaveTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateNormalLeaveTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}