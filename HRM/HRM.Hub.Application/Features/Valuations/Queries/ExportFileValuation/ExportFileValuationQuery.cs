namespace HRM.Hub.Application.Features.Valuations.Queries.ExportFileValuation;
public class ExportFileValuationQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; } = default;
}
