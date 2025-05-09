namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.GetEmployeeDisciplinary;
public class GetDisciplinaryHandler :
    GetAllWithCountHandler<EmployeeDisciplinary, GetDisciplinaryViewModel, GetDisciplinaryQuery>,
    IRequestHandler<GetDisciplinaryQuery, Response<PagedResult<GetDisciplinaryViewModel>>>
{
    public GetDisciplinaryHandler(IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary)
        : base(repositoryDisciplinary) { }

    public override Expression<Func<EmployeeDisciplinary, GetDisciplinaryViewModel>> Selector => z => new GetDisciplinaryViewModel()
    {
        Id = z.Id,
        JobCode = z.Employee.JobCode,
        EmployeeId = z.EmployeeId,
        LotNumber = z.Employee.LotNumber,
        FullName = z.Employee.FullName,
        TitleOfBook = z.TitleOfBook,
        TypeOfDisciplinaryName = z.TypeOfDisciplinary.Name,
        TypeOfDisciplinaryId = z.TypeOfDisciplinaryId,
        BookNo = z.BookNo,
        BookDate = z.BookDate,
        StopPromotion = z.StopPromotion,
        CountOfDayDelay = z.CountOfDayDelay,
        Note = z.Note,
        Status = z.StatusId,
        DisciplinaryLaw = z.DisciplinaryLaw,
        Reason = z.Reason,
    };

    public override Func<IQueryable<EmployeeDisciplinary>, IOrderedQueryable<EmployeeDisciplinary>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetDisciplinaryViewModel>>> Handle(GetDisciplinaryQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

