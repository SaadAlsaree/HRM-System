namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.ExportFileEducationInformation;
public sealed record ExportFileEducationInformationQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}