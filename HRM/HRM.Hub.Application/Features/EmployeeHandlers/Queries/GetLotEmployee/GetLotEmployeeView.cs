

namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetLotEmployee;
public class GetLotEmployeeView
{
    public Guid AttachmentId { get; set; }
    public object Tags { get; set; }
    public string ExtinctionFile { get; set; }
    public string Notes { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
    public DateTime CreateAt { get; set; }
    public bool IsPinned { get; set; }
}
