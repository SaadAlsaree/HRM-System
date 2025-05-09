namespace HRM.Hub.Domain.Common.Enums;

public enum AdministrativeOrderEnum
{
    [Display(Name = "الامر الوزاري بالتعيين")]
    MinisterialOrderAppointing = 1,
    [Display(Name = "الامر الاداري بالتعيين")]
    AdministrativeOrderForAppointment = 2,
    [Display(Name = "الامر الاداري للمباشرة")]
    AdministrativeOrderToCommence = 3,
    [Display(Name = "الامر الاداري بتثبيت العمر")]
    AdministrativeOrderToConfirmAge = 4
}