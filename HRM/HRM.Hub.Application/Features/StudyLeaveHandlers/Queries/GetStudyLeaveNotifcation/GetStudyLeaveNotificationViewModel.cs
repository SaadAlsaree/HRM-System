namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveNotifcation;

public class GetStudyLeaveNotificationViewModel
{
    public Guid EmployeeId { get; set; }
    public string EmployeeFullName { get; set; }

    public int? StudyPeriodTime { get; set; }

    public DateOnly? ReleaseOrderDate { get; set; }

    public DateOnly? HireDate { get; set; }
    public int RemainingDays { get; set; }


}