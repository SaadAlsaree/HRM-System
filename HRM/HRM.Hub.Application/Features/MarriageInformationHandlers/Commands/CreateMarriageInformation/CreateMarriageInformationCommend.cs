namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Commands.CreateMarriageInformation;

public class CreateMarriageInformationCommend : IRequest<Response<bool>>
{
    public Guid? EmployeeId { get; set; }

    public string FirstName { get; set; }

    public string SecondName { get; set; }

    public string ThirdName { get; set; }

    public string SurName { get; set; }

    public DateOnly? MarriageDate { get; set; }

    public int? ChildrenCount { get; set; }

    public string Notes { get; set; }
}