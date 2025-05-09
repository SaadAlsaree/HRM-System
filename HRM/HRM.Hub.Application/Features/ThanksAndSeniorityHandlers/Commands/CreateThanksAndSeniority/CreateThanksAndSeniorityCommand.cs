namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.CreateThanksAndSeniority;

public class CreateThanksAndSeniorityCommand:IRequest<Response<bool>>
{
    public List<Guid> EmployeeId { get; set; }
    public int CreateType { get; set; }
    public int DirectorateId { get; set; } = 0;

    public int? SubDirectorateId { get; set; } = 0;

    public int TypeOfBook { get; set; }

    public int TypeOfSeniority { get; set; }

    public string BookNo { get; set; }

    public DateOnly DateOfBook { get; set; }

    public string BookIssueName { get; set; }

    public string Reason { get; set; }

    public int CountOfMonths { get; set; }

    public bool? IsDocumentVerify { get; set; }

    public DateOnly? CalculationDate { get; set; }

    public string Note { get; set; }

}