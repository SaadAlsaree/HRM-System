namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetManagementInfoEmployeeProfile;
public class GetManagementInfoToEmployeeProfileViewModel:BaseViewModel<Guid>
{
    public string DegreeNameIsInHiring { get; set; }
    public string CategoryNameIsInHiring { get; set; }
    public string DegreeNameIsCurrent { get; set; }
    public string CategoryNameIsCurrent { get; set; }
    public string StopJobDegreeName { get; set; }
    public string JobTitleName { get; set; }
    public string JobDescriptionName { get; set; }
    public string DirectorateName { get; set; }
    public string SubDirectorateName { get; set; }
    public string DepartmentName { get; set; }
    public string SectionName { get; set; }
    public string UnitName { get; set; }
    public string PositionName { get; set; }
    public bool StopPromotion { get; set; }

}
