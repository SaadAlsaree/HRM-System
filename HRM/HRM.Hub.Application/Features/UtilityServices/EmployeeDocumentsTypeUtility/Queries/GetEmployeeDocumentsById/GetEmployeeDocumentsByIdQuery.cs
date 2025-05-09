namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsById;

public class GetEmployeeDocumentsByIdQuery : IRequest<Response<GetEmployeeDocumentsByIdViewModel>>
{
    public int Id { get; set; }
}