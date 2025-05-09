
namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityById;

public class GetThanksAndSeniorityByIdHandler : IRequestHandler<GetThanksAndSeniorityByIdQuery,
    Response<GetThanksAndSeniorityByIdViewModel>>
{
    private readonly IBaseRepository<ThanksAndSeniority> _repositoryThanksAndSeniority;

    public GetThanksAndSeniorityByIdHandler(IBaseRepository<ThanksAndSeniority> repositoryThanksAndSeniority)
    {
        _repositoryThanksAndSeniority = repositoryThanksAndSeniority ??
                                         throw new ArgumentNullException(nameof(repositoryThanksAndSeniority));
    }

    public async Task<Response<GetThanksAndSeniorityByIdViewModel>> Handle(GetThanksAndSeniorityByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryThanksAndSeniority
            .Query(x =>
                x.Id == request.Id)
            .Include(x=>x.TypeOfBook)
            .Include(x=>x.TypeOfSeniority)
            .Select(z => new GetThanksAndSeniorityByIdViewModel()
            {
                Id = z.Id,
                EmployeeId = z.EmployeeId,
                EmployeeFullName = z.Employee.FullName,
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
                LotNumber = z.Employee.LotNumber
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}