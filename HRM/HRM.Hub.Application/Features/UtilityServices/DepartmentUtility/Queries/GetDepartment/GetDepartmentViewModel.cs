namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartment;
public class GetDepartmentViewModel
{
    public int Id { get; set; }
    public int DirectorateId { get; set; }
    public string DirectorateName { get; set; }
    public int SubDirectorateId { get; set; }
    public string SubDirectorateName { get; set; }
    public string Name { get; set; }
    public string ShortKey { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}