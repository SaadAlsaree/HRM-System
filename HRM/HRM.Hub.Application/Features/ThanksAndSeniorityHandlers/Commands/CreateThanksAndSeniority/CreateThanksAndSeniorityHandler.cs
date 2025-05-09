namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.CreateThanksAndSeniority;

public class CreateThanksAndSeniorityHandler : CreateRangeHandler<ThanksAndSeniority, CreateThanksAndSeniorityCommand>, IRequestHandler<CreateThanksAndSeniorityCommand, Response<bool>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployees;
    private List<ThanksAndSeniority> _command;
    public CreateThanksAndSeniorityHandler(IBaseRepository<ThanksAndSeniority> repository
        , IBaseRepository<Employees> repositoryEmployees) : base(repository)
    {
        _command = new List<ThanksAndSeniority>();
        _repositoryEmployees = repositoryEmployees ?? throw new ArgumentNullException(nameof(repositoryEmployees));
    }

    protected override Expression<Func<ThanksAndSeniority, bool>> ExistencePredicate(CreateThanksAndSeniorityCommand request) => null;


    protected override IEnumerable<ThanksAndSeniority> MapToEntity(CreateThanksAndSeniorityCommand request)
    {

        return _command;
    }

    public async Task<Response<bool>> Handle(CreateThanksAndSeniorityCommand request, CancellationToken cancellationToken)
    {
        var employeeIds = new List<Guid>();
        _command = new List<ThanksAndSeniority>();
        if (request.CreateType == 1 && request.EmployeeId.Count != 0)
            employeeIds = request.EmployeeId;
        else
        {
            if (request.DirectorateId == 0 && request.SubDirectorateId != 0)
            {
                employeeIds = await _repositoryEmployees.Query(z=>z.ManagementInformation.SubDirectorateId ==  request.SubDirectorateId)
                    .Select(z=>z.Id).ToListAsync(cancellationToken: cancellationToken);
            }
            else if (request.SubDirectorateId == 0 && request.DirectorateId != 0)
            {
                employeeIds = await _repositoryEmployees.Query(z => z.ManagementInformation.DirectorateId == request.DirectorateId)
                    .Select(z => z.Id).ToListAsync();
            }else
                return ErrorsMessage.NotExistOnCreate.ToErrorMessage(false);
        }
        foreach (var employeeId in employeeIds)
        {
            _command.Add(new ThanksAndSeniority
            {
                BookIssueName = request.BookIssueName,
                BookNo = request.BookNo,
                TypeOfSeniorityId = request.TypeOfSeniority,
                CalculationDate = request.CalculationDate,
                CountOfMonths = request.CountOfMonths,
                DateOfBook = request.DateOfBook,
                EmployeeId = employeeId,
                IsDocumentVerify = request.IsDocumentVerify,
                Note = request.Note,
                Reason = request.Reason,
                IsCalculation = false,
                TypeOfBookId = request.TypeOfBook
            });
        }
        return await HandleBase(request, cancellationToken);
    }
}