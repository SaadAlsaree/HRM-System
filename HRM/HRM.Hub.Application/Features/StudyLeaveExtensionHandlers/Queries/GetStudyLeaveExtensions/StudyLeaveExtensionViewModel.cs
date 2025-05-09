namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensions;

public class StudyLeaveExtensionViewModel:BaseViewModel<Guid>
{
   
    public string OrderNo { get; set; }
    public int? StudyExtensionOrderTypeId { get; set; }
    public string StudyExtensionOrderTypeName { get; set; }
    public int CountOfDay { get; set; }
    public Guid? StudyFileId { get; set; }
    public string StudyFileDocumentNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public string Notes { get; set; }

}