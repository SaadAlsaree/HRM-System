using HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.UpdateLeavesBalance;


namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.UpdateLeavesMedicalBalance
{
    public class UpdateLeavesMedicalBalanceHandler : UpdateHandler<Leaves, UpdateLeavesMedicalBalanceCommand>, IRequestHandler<UpdateLeavesMedicalBalanceCommand, Response<bool>>
    {
        public UpdateLeavesMedicalBalanceHandler(IBaseRepository<Leaves> leavesRepository) : base(leavesRepository)
        {
        }

        public override Expression<Func<Leaves, bool>> EntityPredicate(UpdateLeavesMedicalBalanceCommand request)
       => x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateLeavesMedicalBalanceCommand request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
