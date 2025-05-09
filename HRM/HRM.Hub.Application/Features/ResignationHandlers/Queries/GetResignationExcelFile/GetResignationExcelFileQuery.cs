namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationExcelFile;

public class GetResignationExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}