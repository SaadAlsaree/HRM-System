namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEmployeeInformation;
public class GetEmployeeInformationViewModel : BaseViewModel<Guid>
{
    public string StatisticalIndex { get; set; }

    public string MotherFullName { get; set; }
    public GenderEnum Gender { get; set; }
    public string BirthPlace { get; set; }
    public DateOnly? BirthDate { get; set; }
    public SocialStatusEnum? SocialStatus { get; set; }
    public string Notes { get; set; }
    public WorkingStatusEnum StatusWorkingId { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }
    public string Avatar { get; set; }
    public string FileExtension { get; set; }
    public string CountryName { get; set; }
    public string TypeOfJobName { get; set; }

    public bool? MedicalTest { get; set; }
    public bool? IsReEmployed { get; set; }
    public bool? IsBehaviorCode { get; set; }
    public bool? IsPinned { get; set; }

    public DateOnly? EndOfServiceDate { get; set; }

}