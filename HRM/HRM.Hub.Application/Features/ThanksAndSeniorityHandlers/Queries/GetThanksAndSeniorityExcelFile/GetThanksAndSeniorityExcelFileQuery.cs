namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityExcelFile;

public class GetThanksAndSeniorityExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}