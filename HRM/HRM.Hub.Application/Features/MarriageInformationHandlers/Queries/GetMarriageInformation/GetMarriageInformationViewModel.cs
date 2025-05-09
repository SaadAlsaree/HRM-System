namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformation;

public class GetMarriageInformationViewModel: BaseViewModel<Guid>
{
    public string EmployeeName { get; set; }

    public string FirstName { get; set; }

    public string SecondName { get; set; }

    public string ThirdName { get; set; }

    public string SurName { get; set; }


    public DateOnly? MarriageDate { get; set; }

    public int? ChildrenCount { get; set; }

    public string Notes { get; set; }
    
    public bool IsCurrent { get; set; }
}