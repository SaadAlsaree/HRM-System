namespace HRM.Hub.Domain.Common.Enums;
public enum LeaveStatus
{
    [Display(Name = "مسودة")]
    Draft = 0,
    [Display(Name = "بانتظار الموافقة")]
    PendingApproval = 1,
    [Display(Name = "معتمدة")]
    Approved = 2,
    [Display(Name = "مرفوضة")]
    Rejected = 3,
    [Display(Name = "نشطة")]
    Active = 4,
    [Display(Name = "منتهية")]
    Expired = 5,
    [Display(Name = "ملغية")]
    Cancelled = 6
}