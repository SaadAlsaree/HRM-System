using HRM.Hub.Application.Features.PromotionAllowanceCalculation.Models;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.AnnualAllowanceCalculation.Models;

public class AnnualAllowanceCalculationViewModel
{
    public Guid RunId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Trigger { get; set; } = string.Empty;
    public DateOnly LastAllowanceDate { get; set; }
    public int LegalTermMonths { get; set; }
    public int ServiceMonths { get; set; }
    public DateOnly BaseDate { get; set; }
    public DateOnly BaseDueDate { get; set; }
    public DateOnly FinalDueDate { get; set; }
    public AnnualAllowanceStatus StatusId { get; set; }
    public string Summary { get; set; } = string.Empty;
    public DateTime CalculatedAt { get; set; }
    public List<AnnualAllowanceCalculationStepViewModel> Steps { get; set; } = new();
}

public class AnnualAllowanceCalculationStepViewModel
{
    public string StepCode { get; set; } = string.Empty;
    public string SourceEntityName { get; set; } = string.Empty;
    public string SourceEntityId { get; set; } = string.Empty;
    public string Reason { get; set; } = string.Empty;
    public DateOnly? BeforeDate { get; set; }
    public DateOnly? AfterDate { get; set; }
    public int DeltaMonths { get; set; }
    public int DeltaDays { get; set; }
}