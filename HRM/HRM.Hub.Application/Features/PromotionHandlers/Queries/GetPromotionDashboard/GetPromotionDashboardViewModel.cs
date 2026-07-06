using System;
using System.Collections.Generic;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboard
{
    public class GetPromotionDashboardViewModel
    {
        // --- البطاقات الرئيسية (Summary Cards) ---
        public int TotalDueThisMonth { get; set; }
        public int TotalCompleted { get; set; }
        public int TotalPending { get; set; }
        public int TotalWithheld { get; set; }
        public int TotalOverdue { get; set; }
        public int TotalEvaluationsMissing { get; set; }

        // --- إحصائيات الإضافات الاستثنائية ---
        public int TotalSeniorityMonthsGranted { get; set; }
        public int TotalServiceCalculations { get; set; }
        public int TotalCertificateCalculations { get; set; }
        public int TotalDegreeAccelerations { get; set; }

        // --- رسوم بيانية وجداول ---
        public List<StatusDistributionItem> StatusDistribution { get; set; } = new List<StatusDistributionItem>();
        public List<MonthlyCountItem> MonthlyCompletedPromotions { get; set; } = new List<MonthlyCountItem>();
        public List<WithholdingReasonItem> WithholdingReasons { get; set; } = new List<WithholdingReasonItem>();
        public List<RecentActivityItem> RecentActivities { get; set; } = new List<RecentActivityItem>();
    }

    public class StatusDistributionItem
    {
        public string StatusName { get; set; } = string.Empty;
        public int Count { get; set; }
    }

    public class MonthlyCountItem
    {
        public int Month { get; set; }
        public string MonthName { get; set; } = string.Empty;
        public int Count { get; set; }
    }

    public class WithholdingReasonItem
    {
        public string Reason { get; set; } = string.Empty;
        public int Count { get; set; }
    }

    public class RecentActivityItem
    {
        public string EmployeeName { get; set; } = string.Empty;
        public string ActionType { get; set; } = string.Empty;
        public DateTime ActionDate { get; set; }
        public string Details { get; set; } = string.Empty;
    }
}
