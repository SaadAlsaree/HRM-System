namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Commands.CreateStudyLeaveExtension;

public class CreateStudyLeaveExtensionCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public int? StudyExtensionOrderTypeId { get; set; }
    public Guid? StudyFileId { get; set; }

    public string OrderNo { get; set; }

    public int CountOfDay { get; set; }
    public DateOnly? OrderDate { get; set; }

    public DateOnly? FromDate { get; set; }

    public DateOnly? ToDate { get; set; }

    public string Notes { get; set; }

}