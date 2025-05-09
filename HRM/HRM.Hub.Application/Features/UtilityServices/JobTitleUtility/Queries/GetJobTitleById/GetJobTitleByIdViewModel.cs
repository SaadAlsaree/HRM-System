namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleById;

public class GetJobTitleByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}