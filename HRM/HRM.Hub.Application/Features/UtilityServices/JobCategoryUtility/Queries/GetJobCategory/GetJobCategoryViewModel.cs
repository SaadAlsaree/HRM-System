namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategory;
public class GetJobCategoryViewModel
{
    public int Id { get; set; }
    public int DegreeId { get; set; }
    public string DegreeName { get; set; }
    public decimal IncreaseAmount { get; set; }

    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}