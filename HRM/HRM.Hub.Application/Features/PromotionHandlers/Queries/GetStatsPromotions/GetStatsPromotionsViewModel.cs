namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotions
{
    public class GetStatsPromotionsViewModel
    {
        public string EmployeeJobCode { get; set; }
        public string EmployeeStatisticalIndex { get; set; }
        public string EmployeeLotNumber { get; set; }
        public string EmployeeName { get; set; }
        public string NewJobTitleName { get; set; }
        public string OldJobTitleName { get; set; }
        public string DegreeFromName { get; set; }
        public string DegreeToName { get; set; }
        public string BookNo { get; set; }
        public DateOnly? BookDate { get; set; }

        public DateOnly? DueDateDegree { get; set; }

        public DateOnly? DueDateCategory { get; set; }

        public string Note { get; set; }

        public Status Status { get; set; }

        public virtual ICollection<Attachments> Attachments { get; set; } = new List<Attachments>();

        public virtual EducationInformation NewEducationInformation { get; set; }

        public virtual EducationInformation OldEducationInformation { get; set; }
        public virtual ICollection<ThanksAndSeniority> ThanksAndSeniorities { get; set; } = new List<ThanksAndSeniority>();

        public virtual ICollection<EmployeeDisciplinary> EmployeeDisciplinaries { get; set; } = new List<EmployeeDisciplinary>();

        public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>();

    }
}
