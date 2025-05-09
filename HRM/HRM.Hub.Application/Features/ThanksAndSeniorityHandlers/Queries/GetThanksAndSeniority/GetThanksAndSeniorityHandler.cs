namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniority;

public class GetThanksAndSeniorityHandler : GetAllWithCountHandler<ThanksAndSeniority, GetThanksAndSeniorityViewModel, GetThanksAndSeniorityQuery>, IRequestHandler<GetThanksAndSeniorityQuery, Response<PagedResult<GetThanksAndSeniorityViewModel>>>
{
    public GetThanksAndSeniorityHandler(IBaseRepository<ThanksAndSeniority> repositoryThanksAndSeniority)
        : base(repositoryThanksAndSeniority) { }

    public override Expression<Func<ThanksAndSeniority, GetThanksAndSeniorityViewModel>> Selector => z => new GetThanksAndSeniorityViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        Note = z.Note,
        Status = z.StatusId, 
        BookNo = z.BookNo,
        TypeOfSeniority = z.TypeOfSeniorityId,
        DateOfBook = z.DateOfBook,
        BookIssueName = z.BookIssueName,
        Reason = z.Reason,
        CountOfMonths = z.CountOfMonths,
        IsDocumentVerify = z.IsDocumentVerify,
        IsCalculation = z.IsCalculation,
        CalculationDate = z.CalculationDate,
        TypeOfBook = z.TypeOfBookId,
        StatusName = z.StatusId.GetDisplayName(),
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
    };

    public override Func<IQueryable<ThanksAndSeniority>, IOrderedQueryable<ThanksAndSeniority>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetThanksAndSeniorityViewModel>>> Handle(GetThanksAndSeniorityQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}