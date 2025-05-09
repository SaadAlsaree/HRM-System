namespace HRM.Hub.Application.Features.AbsenceHandlers.Commands.CreateAbsence;
public class CreateAbsenceCommandHandler : CreateHandler<Absence, CreateAbsenceCommand>, IRequestHandler<CreateAbsenceCommand, Response<bool>>
{
    public CreateAbsenceCommandHandler(IBaseRepository<Absence> absenceRepository)
        : base(absenceRepository)
    {
    }

    protected override Expression<Func<Absence, bool>> ExistencePredicate(CreateAbsenceCommand request) => x => false;

    protected override Absence MapToEntity(CreateAbsenceCommand request)
    {
        return new Absence
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            BookNo = request.BookNo,
            BookDate = request.BookDate,
            AbsenceDate = request.AbsenceDate,
            Note = request.Note,
            AbsenceOrderDate = request.AbsenceOrderDate,
            AbsenceOrderNo = request.AbsenceOrderNo,
            ReturnOrderDate = request.ReturnOrderDate,
            ReturnOrderNo = request.ReturnOrderNo,
            CreateAt = DateTime.Now,
            CreateBy = request.CreateBy,
            CountOfDays = request.CountOfDays,
        };
    }

    public async Task<Response<bool>> Handle(CreateAbsenceCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}