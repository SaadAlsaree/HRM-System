namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsById;

public class GetEmployeeDocumentsByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}