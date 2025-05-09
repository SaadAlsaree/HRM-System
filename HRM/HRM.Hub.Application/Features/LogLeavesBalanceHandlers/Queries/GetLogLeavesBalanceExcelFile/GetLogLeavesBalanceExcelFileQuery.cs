namespace HRM.Hub.Application.Features.LogLeavesBalanceHandlers.Queries.GetLogLeavesBalanceExcelFile;
public class GetLogLeavesBalanceExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}