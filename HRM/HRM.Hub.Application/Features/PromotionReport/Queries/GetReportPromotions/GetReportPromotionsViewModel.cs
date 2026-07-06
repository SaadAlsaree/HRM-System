namespace HRM.Hub.Application.Features.PromotionReport.Queries.GetReportPromotions
{
    public class GetReportPromotionsViewModel : BaseViewModel<Guid>
    {
        public string FileNumber { get; set; } = string.Empty;
        public string JobDegreeName { get; set; } = string.Empty;
        public string JobTitleName { get; set; } = string.Empty;
        public string OrderNo { get; set; } = string.Empty;
        public DateOnly? OrderDate { get; set; }
        public string ThanksOrderNo { get; set; } = string.Empty;
        public DateOnly? ThanksOrderDate { get; set; }
        public string Penalties { get; set; } = string.Empty;
        public DateOnly? PenaltiesDate { get; set; }
        public string LeaveWithoutSalary { get; set; } = string.Empty;
        public DateOnly? FromDate { get; set; }
        public DateOnly? ToDate { get; set; }
        public string NewJobDegreeName { get; set; } = string.Empty;
        public string AcademicAchievement { get; set; } = string.Empty;
        public string NewJobTitleName { get; set; } = string.Empty;
        public DateOnly? DueDate { get; set; }
        public string Notes { get; set; } = string.Empty;
    }
}
