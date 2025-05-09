namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.AddEmployeeDisciplinary;
public class AddEmployeeDisciplinaryHandler : CreateHandler<EmployeeDisciplinary, AddDisciplinaryCommand>, IRequestHandler<AddDisciplinaryCommand, Response<bool>>
{
    public AddEmployeeDisciplinaryHandler(IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary)
        : base(repositoryDisciplinary) { }
    protected override Expression<Func<EmployeeDisciplinary, bool>> ExistencePredicate(AddDisciplinaryCommand request) 
        => z => false;
    protected override EmployeeDisciplinary MapToEntity(AddDisciplinaryCommand request)
    {
        return new EmployeeDisciplinary
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            TitleOfBook = request.TitleOfBook,
            TypeOfDisciplinaryId  = request.TypeOfDisciplinaryId,
            BookNo  = request.BookNo,
            BookDate  = request.BookDate,
            StopPromotion  = request.StopPromotion,
            CountOfDayDelay  = request.CountOfDayDelay,
            Note = request.Note,
            Reason = request.Reason,
            DisciplinaryLaw = request.DisciplinaryLaw

        };
    }

    public async Task<Response<bool>> Handle(AddDisciplinaryCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
