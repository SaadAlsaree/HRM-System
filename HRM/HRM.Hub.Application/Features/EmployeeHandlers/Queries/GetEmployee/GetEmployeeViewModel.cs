namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployee;
public class GetEmployeeViewModel : BaseViewModel<Guid>
{
    public string StatisticalIndex { get; set; }
    public string JobTitle { get; set; }
    public string PathOfProfile { get; set; }
    public string Avatar { get; set; }
    public string ExtinctionFile { get; set; }
    public string AttachmentSetting { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }
    public int? CountryId { get; set; }
    public string CountryName { get; set; }
    public bool IsPinned { get; set; }
}