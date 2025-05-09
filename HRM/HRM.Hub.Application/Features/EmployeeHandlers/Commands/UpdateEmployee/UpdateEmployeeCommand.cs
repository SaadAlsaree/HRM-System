using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateEmployee;
public class UpdateEmployeeCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public string StatisticalIndex { get; set; }
    public string JobCode { get; set; }
    public string LotNumber { get; set; }
    public string FirstName { get; set; }
    public string SecondName { get; set; }
    public string ThirdName { get; set; }
    public string FourthName { get; set; }
    public string SurName { get; set; }
    public string MotherFirstName { get; set; }
    public string MotherSecondName { get; set; }
    public string MotherThirdName { get; set; }
    public string MotherSurName { get; set; }
    public string WifeName { get; set; }
    public int ChildrenCount { get; set; }
    public int GenderId { get; set; }
    public string BirthPlace { get; set; }
    public DateOnly BirthDate { get; set; }
    public SocialStatusEnum SocialStatus { get; set; }
    public int StatusWorkingId { get; set; }
    public string Notes { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }

    public int? CountryId { get; set; }

    [SwaggerIgnore]

    public string FullName { get; set; }
    [SwaggerIgnore]

    public string MotherFullName { get; set; }
}