namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityById;

public class GetThanksAndSeniorityByIdViewModel:BaseViewModel<Guid>
{
  
    public string EmployeeFullName { get; set; }

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