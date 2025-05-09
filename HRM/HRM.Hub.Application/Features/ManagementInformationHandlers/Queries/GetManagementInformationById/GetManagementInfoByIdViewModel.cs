namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationById;
public class GetManagementInfoByIdViewModel:BaseViewModel<Guid>
{
    public string DirectorateName { get; set; }

    public string EmployeeName { get; set; }

    public string SubDirectorateName { get; set; }

    public string DepartmentName { get; set; }

    public string SectionName { get; set; }
    public string PositionName { get; set; }

    public string EmploymentDegreeName { get; set; }

    public string JobDegreeName { get; set; }

    public string JobCategoryName { get; set; }

    public string JobTitleName { get; set; }
    public string Notes { get; set; }
    public bool IsCurrent { get; set; }
    public bool IsInHiring { get; set; }
}
