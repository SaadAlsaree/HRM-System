using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Commands.UpdateThanksAndSeniority;

public class UpdateThanksAndSeniorityCommand:IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

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