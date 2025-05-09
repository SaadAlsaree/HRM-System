namespace HRM.Hub.Domain.Common.Enums;
public enum LeaveTypes
{
    [Display(Name = "غير معرف")]
    Unknown = 0,
    [Display(Name = "اجازة اعتيادية")]
    NormalLeave = 1,
    [Display(Name = "زمنية")]
    PartialLeave = 2,
    [Display(Name = "اجازة مرضية")]
    SicknessLeave = 3,
    [Display(Name = "الامومة والوضع")]
    MotherhoodBornLeave = 4,
    [Display(Name = "اجازة طويلة")]
    LongLeave = 5,
    [Display(Name = "اجازة سفر")]
    TravelLeave = 6,
    [Display(Name = "اجازة مرضية خاصة")]
    SpecialSicknessLeave = 7,
    [Display(Name = "اجازة المعين")]
    AppointeeLeave = 8,
    [Display(Name = "اجازة العدة")]
    MourningLeave = 9,

}