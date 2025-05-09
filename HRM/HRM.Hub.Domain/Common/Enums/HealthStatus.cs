namespace HRM.Hub.Domain.Common.Enums;
public enum HealthStatus
{
    [Display(Name = "غير مشخص")]
    None = 0,
    [Display(Name = "شهيد")]
    Martyr = 1,
    [Display(Name = "جريح")]
    Injured = 2
}