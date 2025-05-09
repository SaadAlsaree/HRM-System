namespace HRM.Hub.Domain.Common.Enums;

public enum WorkingStatusEnum
{
    [Display(Name = "مستمر في الخدمة")]
    Active,

    [Display(Name = "متوفي")]
    Deceased,

    [Display(Name = "شهيد")]
    Martyr,

    [Display(Name = "استقالة")]
    Resigned,

    [Display(Name = "نقل خدمات")]
    Transferred,
    [Display(Name = "تقاعد")]
    Retired,
    [Display(Name = "عزل")]
    Dismissed
}