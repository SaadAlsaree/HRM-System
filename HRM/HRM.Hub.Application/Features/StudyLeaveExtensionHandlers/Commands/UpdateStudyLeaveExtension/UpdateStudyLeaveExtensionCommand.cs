using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.UpdateStudyLeaveExtension;

public class UpdateStudyLeaveExtensionCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid StudyLeaveExtensionId { get; set; }
    public Guid EmployeeId { get; set; }
    public Guid? StudyFileId { get; set; }
    public int? StudyExtensionOrderTypeId { get; set; }
    public string OrderNo { get; set; }

    public int CountOfDay { get; set; }
    public DateOnly? OrderDate { get; set; }

    public DateOnly? FromDate { get; set; }

    public DateOnly? ToDate { get; set; }

    public string Notes { get; set; }

}