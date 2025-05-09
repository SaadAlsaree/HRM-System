namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Commands.UpdateLongLeaveType
{
    public class UpdateLongLeaveTypeHandler :
        UpdateHandler<LongLeaveType, UpdateLongLeaveTypeCommend>,
        IRequestHandler<UpdateLongLeaveTypeCommend, Response<bool>>
    {
        public UpdateLongLeaveTypeHandler(IBaseRepository<LongLeaveType> repositoryNormalLeaveType)
            : base(repositoryNormalLeaveType)
        {
        }

        public override Expression<Func<LongLeaveType, bool>>
            EntityPredicate(UpdateLongLeaveTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateLongLeaveTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}