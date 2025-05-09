namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEducationInformationToEmployeeProfile;
public class GetEducationInfoToEmployeeProfileViewModel:BaseViewModel<Guid>
{
    public int? AcademicFieldIdIsInHiring { get; set; }
    public string AcademicFieldNameIsInHiring { get; set; }
    
    public int? AcademicAchievementIdIsInHiring { get; set; }
    public string AcademicAchievementNameIsInHiring { get; set; }
    
    public int? AcademicFieldIdIsCurrent { get; set; }
    public string AcademicFieldNameIsCurrent { get; set; }
    
    public int? AcademicAchievementIdIsCurrent { get; set; }
    public string AcademicAchievementNameIsCurrent { get; set; }

    public bool? IsDocumentVerify { get; set; }
}
