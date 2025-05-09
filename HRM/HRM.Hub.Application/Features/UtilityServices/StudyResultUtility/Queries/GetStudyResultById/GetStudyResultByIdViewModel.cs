namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultById;

public class GetStudyResultByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}