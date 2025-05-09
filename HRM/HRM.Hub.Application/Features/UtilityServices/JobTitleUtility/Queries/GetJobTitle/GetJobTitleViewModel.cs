namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitle;
public class GetJobTitleViewModel
{
    public int Id { get; set; }
    public int DegreeId { get; set; }
    public string DegreeName { get; set; }

    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}