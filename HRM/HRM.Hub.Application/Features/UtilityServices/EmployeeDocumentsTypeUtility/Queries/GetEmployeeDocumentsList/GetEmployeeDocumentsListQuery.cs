namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsList;

public class GetEmployeeDocumentsListQuery : IRequest<Response<IEnumerable<GetEmployeeDocumentsListViewModel>>>
{
    public Guid Id { get; set; }
    public string NameTerm { get; set; }
}