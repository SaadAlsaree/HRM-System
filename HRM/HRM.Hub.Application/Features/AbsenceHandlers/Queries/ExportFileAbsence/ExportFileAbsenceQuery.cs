namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.ExportFileAbsence;
public class ExportFileAbsenceQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}