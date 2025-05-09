namespace HRM.Hub.Domain.Common.Enums;
public enum BookTitles
{
    [Display(Name = "غير معرف")]
    None,
    [Display(Name = "الامر الأداري الوزاري بالتعييين")]
    JobAdministrativeMinistryOrder,
    [Display(Name = "الامر الأداري بالتعييين")]
    JobAdministrativeOrder,
    [Display(Name = "الامر الأداري بالمباشرة")]
    HireAdministrativeOrder,
    [Display(Name = "الامر الأداري بالتثبيت على الملاك")]
    StaffConfirmationAdministrativeOrder,
    [Display(Name = "الامر الأداري بتثبيت العمر")]
    AgeConfirmationAdministrativeOrder
}