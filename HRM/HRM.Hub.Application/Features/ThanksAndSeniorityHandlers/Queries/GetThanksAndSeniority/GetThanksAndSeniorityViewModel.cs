namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniority;

public class GetThanksAndSeniorityViewModel:BaseViewModel<Guid>
{
    public int TypeOfBook { get; set; }

    public int TypeOfSeniority { get; set; }

    public string BookNo { get; set; }

    public DateOnly DateOfBook { get; set; }

    public string BookIssueName { get; set; }

    public string Reason { get; set; }

    public int CountOfMonths { get; set; }

    public bool? IsDocumentVerify { get; set; }

    public DateOnly? CalculationDate { get; set; }

    public bool? IsCalculation { get; set; }

    public string Note { get; set; }


}