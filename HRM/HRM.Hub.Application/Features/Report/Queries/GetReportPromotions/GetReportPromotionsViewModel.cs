namespace HRM.Hub.Application.Features.Report.Queries.GetReportPromotions
{
    public class GetReportPromotionsViewModel:BaseViewModel<Guid>
    {
        public string CurrentDegreeName { get; set; }
        public int CurrentDegreeId { get; set; }
        public string CurrentCategoryName { get; set; }
        public int CurrentCategoryId { get; set; }
        public DateOnly CurrentDueDateDegree { get; set; }
        public DateOnly CurrentDueDateCategory { get; set; }
        public string NewCategoryName { get; set; }
        public int NewCategoryId { get; set; }
        public DateOnly NewDueDateDegree { get; set; }
        public int JobTitleId { get; set; }
        public string JobTitleName { get; set; }
        public int DirectorateId { get; set; }

        public string DirectorateName { get; set; }

        public string Notes { get; set; }
    }
}
