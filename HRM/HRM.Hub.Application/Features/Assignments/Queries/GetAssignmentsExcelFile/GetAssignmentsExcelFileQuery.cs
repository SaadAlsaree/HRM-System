namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignmentsExcelFile;
public class GetAssignmentsExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}