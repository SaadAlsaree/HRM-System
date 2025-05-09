namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementExcelFile;

public class GetRetirementExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}