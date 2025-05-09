namespace HRM.Hub.Application.Features.LeavesHandlers.Queries.GetLeaves;
public class GetLeavesViewModel: BaseViewModel<Guid>
{
    public string StatisticalIndex { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public DateOnly? FromDate { get; set; }
    public DateOnly? ToDate { get; set; }
    public int? CountOfDays { get; set; }
    public int? CountOfMinutes { get; set; }
    public string Note { get; set; }
    public int? CountryId { get; set; }
    public string CountryName { get; set; }
    public DateTime? DateOfAssignment { get; set; }
    public string NoOfAssignment { get; set; }
    public DateTime? DateOfBirthCertificate { get; set; }
    public string NoOfBirthCertificate { get; set; }
    public DateTime? ReleaseDate { get; set; }
    public DateTime? DateOfRelease { get; set; }
    public string NoOfRelease { get; set; }

    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public DateTime? DateOfStart { get; set; }
    public string NoOfStart { get; set; }
    public bool? IsInside { get; set; }
    public SalaryStatus SalaryStatusId { get; set; }
    public string SalaryStatusName { get; set; }
    public DateTime? DateOfPermission { get; set; }
    public string NoOfPermission { get; set; }
    public string NormalLeaveTypeName { get; set; }
    public string SicknessTypeName { get; set; }
    public int? NormalLeaveTypeId { get; set; }
    public int? SicknessTypeId { get; set; }
}