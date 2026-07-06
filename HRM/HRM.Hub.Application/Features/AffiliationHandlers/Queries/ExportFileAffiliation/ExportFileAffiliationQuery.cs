
namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.ExportFileAffiliation;

public class ExportFileAffiliationQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}
