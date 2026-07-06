namespace HRM.Hub.Application.Features.PromotionAllowanceCalculation.Models;

public class PromotionAllowanceCalculationDetailsViewModel
{
    public Guid RunId { get; set; }
    public Guid EmployeeId { get; set; }
    public string Trigger { get; set; } = string.Empty;
    public DateOnly? PromotionBaseDate { get; set; }
    public int? PromotionBaseMonths { get; set; }
    public DateOnly? PromotionDueDate { get; set; }
    public DateOnly? AllowanceBaseDate { get; set; }
    public int? AllowanceBaseMonths { get; set; }
    public DateOnly? AllowanceDueDate { get; set; }
    public string Summary { get; set; } = string.Empty;
    public DateTime CalculatedAt { get; set; }
    public int? EmployeeStatusId { get; set; }
    public List<PromotionAllowanceCalculationStepViewModel> Steps { get; set; } = new();
}

public class PromotionAllowanceCalculationStepViewModel
{
    public string CalculationKind { get; set; } = string.Empty;
    public string StepCode { get; set; } = string.Empty;
    public string SourceEntityName { get; set; } = string.Empty;
    public string SourceEntityId { get; set; } = string.Empty;
    public string Reason { get; set; } = string.Empty;
    public DateOnly? BeforeDate { get; set; }
    public DateOnly? AfterDate { get; set; }
    public int DeltaMonths { get; set; }
    public int DeltaDays { get; set; }
}
