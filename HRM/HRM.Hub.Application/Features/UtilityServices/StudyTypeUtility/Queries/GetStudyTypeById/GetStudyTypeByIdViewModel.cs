namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyTypeById;

public class GetStudyTypeByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}