namespace HRM.Hub.Domain.Common.Enums;
public enum SalaryStatus
{
    [Display(Name = "غير محدد")]
    NotSpecified = 0,
    [Display(Name = "راتب")]
    WithSalary = 1,
    [Display(Name = "بدون راتب")]
    WithoutSalary = 2,
    [Display(Name = "راتب اسمي")]
    NominalSalary = 3,
    [Display(Name = "نصف راتب اسمي")]
    HalfNominalSalary = 4,
    [Display(Name = "نصف راتب اسمي + راتب اسمي")]
    HalfAndNominalSalary = 5
}