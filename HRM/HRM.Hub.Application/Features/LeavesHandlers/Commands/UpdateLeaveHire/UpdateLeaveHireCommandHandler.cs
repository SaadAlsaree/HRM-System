namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeaveHire;
public class UpdateLeaveHireCommandHandler : UpdateHandler<Leaves, UpdateLeaveHireCommand>, IRequestHandler<UpdateLeaveHireCommand, Response<bool>>
{
    public UpdateLeaveHireCommandHandler(IBaseRepository<Leaves> leavesRepository)
        : base(leavesRepository)
    {
    }

    public override Expression<Func<Leaves, bool>> EntityPredicate(UpdateLeaveHireCommand request)
        => x => x.Id == request.LeaveId;

    public async Task<Response<bool>> Handle(UpdateLeaveHireCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}