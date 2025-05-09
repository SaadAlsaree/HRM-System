namespace HRM.Hub.Application.Features.MovementHandlers.Queries.Dashboard;
public sealed record GetDashboardViewModel
{
    public GetDashboardViewModel()
    {
        Data = Enumerable.Empty<object>();
    }
    public int? TotalEmployees { get; set; } // الملاك الكلي
    public int? TotalAssignedTo { get; set; } // المنسبين إلى
    public int? TotalAssignedFrom { get; set; } // المنسبين من
    public int? TotalAssigned { get; set; } // المنسبين
    public int? TotalRepresentatives { get; set; } // عدد الممثلين
    public int? TotalVacantPositions { get; set; } // عدد المفرغين
    public int? TotalAppointedEmployees { get; set; } // عدد المكلفين
    public IEnumerable<object> Data { get; set; }
}