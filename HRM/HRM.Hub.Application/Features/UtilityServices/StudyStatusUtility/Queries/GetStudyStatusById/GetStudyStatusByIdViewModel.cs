namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusById;

public class GetStudyStatusByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}