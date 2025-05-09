using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.InterruptionHandlers.Commands.CreateInterruption;
public class CreateInterruptionCommandHandler : CreateHandler<Interruption, CreateInterruptionCommand>,
    IRequestHandler<CreateInterruptionCommand, Response<bool>>
{
    public CreateInterruptionCommandHandler(IBaseRepository<Interruption> interruptionRepository)
        : base(interruptionRepository)
    {
    }

    public async Task<Response<bool>> Handle(CreateInterruptionCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    protected override Expression<Func<Interruption, bool>> ExistencePredicate(CreateInterruptionCommand request)
    {
        return x => false;
    }

    protected override Interruption MapToEntity(CreateInterruptionCommand request)
    {
        return new Interruption
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            NotificationDate = request.NotificationDate,
            Reason = request.Reason,
            Note = request.Note,
            CreateBy = request.CreateBy
        };
    }
}