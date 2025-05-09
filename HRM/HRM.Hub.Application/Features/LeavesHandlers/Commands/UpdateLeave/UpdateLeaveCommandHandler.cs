namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.UpdateLeave;
public class UpdateLeaveCommandHandler : UpdateHandler<Leaves, UpdateLeaveCommand>, IRequestHandler<UpdateLeaveCommand, Response<bool>>
{
    public UpdateLeaveCommandHandler(IBaseRepository<Leaves> leavesRepository)
        : base(leavesRepository)
    {  
    }

    public override Expression<Func<Leaves, bool>> EntityPredicate(UpdateLeaveCommand request) 
        => x => x.Id == request.LeaveId;

    public async Task<Response<bool>> Handle(UpdateLeaveCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}