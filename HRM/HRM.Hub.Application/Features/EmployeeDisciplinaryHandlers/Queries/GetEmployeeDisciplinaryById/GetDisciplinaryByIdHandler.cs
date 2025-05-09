namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.GetEmployeeDisciplinaryById;
public class GetDisciplinaryByIdHandler : GetByIdHandler<EmployeeDisciplinary, GetDisciplinaryByIdViewModel, GetDisciplinaryByIdQuery>, IRequestHandler<GetDisciplinaryByIdQuery, Response<GetDisciplinaryByIdViewModel>>
{
    public GetDisciplinaryByIdHandler(IBaseRepository<EmployeeDisciplinary> repositoryEmployeeDisciplinary)
        : base(repositoryEmployeeDisciplinary) { }

    public override Expression<Func<EmployeeDisciplinary, bool>> IdPredicate(GetDisciplinaryByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EmployeeDisciplinary, GetDisciplinaryByIdViewModel>> Selector => z => new GetDisciplinaryByIdViewModel()
    {
        Id = z.Id,
        JobCode = z.Employee.JobCode,
        EmployeeId = z.EmployeeId,
        LotNumber = z.Employee.LotNumber,
        FullName = z.Employee.FullName,
        TitleOfBook = z.TitleOfBook,
        TypeOfDisciplinaryId = z.TypeOfDisciplinaryId,
        DisciplinaryLaw = z.DisciplinaryLaw,
        CountOfDayDelay = z.CountOfDayDelay,
        TypeOfDisciplinaryName = z.TypeOfDisciplinary.Name,
        BookNo = z.BookNo,
        BookDate = z.BookDate,
        StopPromotion = z.StopPromotion,
        Note = z.Note,
        Status = z.StatusId,
        Reason = z.Reason,
    };
    public async Task<Response<GetDisciplinaryByIdViewModel>> Handle(GetDisciplinaryByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
