using System;
using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionDashboardDetails
{
    public class GetPromotionDashboardDetailsViewModel
    {
        public Guid EmployeeId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string JobDegreeName { get; set; } = string.Empty;
        
        public DateOnly? DueDate { get; set; }
        public Status StatusId { get; set; }
        public string StatusName { get; set; } = string.Empty;

        // Additional optional info based on the filter (e.g. Withholding reason, or missing evaluation year)
        public string AdditionalInfo { get; set; } = string.Empty;
    }
}
