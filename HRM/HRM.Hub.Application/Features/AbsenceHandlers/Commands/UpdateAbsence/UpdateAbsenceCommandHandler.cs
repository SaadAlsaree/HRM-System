namespace HRM.Hub.Application.Features.AbsenceHandlers.Commands.UpdateAbsence;
public class UpdateAbsenceCommandHandler : UpdateHandler<Absence, UpdateAbsenceCommand>, IRequestHandler<UpdateAbsenceCommand, Response<bool>>
{
    public UpdateAbsenceCommandHandler(IBaseRepository<Absence> absenceRepository)
        : base(absenceRepository)
    {
    }

    public override Expression<Func<Absence, bool>> EntityPredicate(UpdateAbsenceCommand request) => 
        x => x.Id == request.AbsenceId;

    public async Task<Response<bool>> Handle(UpdateAbsenceCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}