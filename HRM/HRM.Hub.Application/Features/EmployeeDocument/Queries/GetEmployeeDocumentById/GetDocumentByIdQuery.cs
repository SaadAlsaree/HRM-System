namespace HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocumentById;
public class GetDocumentByIdQuery : IRequest<Response<GetDocumentByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}