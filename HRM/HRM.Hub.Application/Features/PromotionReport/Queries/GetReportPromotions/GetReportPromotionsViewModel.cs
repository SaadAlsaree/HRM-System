namespace HRM.Hub.Application.Features.Report.Queries.GetReportPromotions
{
    public class GetReportPromotionsViewModel : BaseViewModel<Guid>
    {
        public string JobCode { get; set; } = string.Empty;
        public string LotNumber { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public int JobDegreeId { get; set; }
        public string JobDegreeName { get; set; }
        public int JobTitleId { get; set; }
        public string JobTitlName { get; set; } = string.Empty;
        public string Notes { get; set; }
    }
}
