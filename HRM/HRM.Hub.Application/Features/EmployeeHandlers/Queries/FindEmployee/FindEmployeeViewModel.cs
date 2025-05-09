namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.FindEmployee;
public class FindEmployeeViewModel : BaseViewModel<Guid>
{
    public string MotherFullName { get; set; }
    public int? JobDegreeId { get; set; }
    public string JobDegreeName { get; set; }
    public int? JobCategoryId { get; set; }
    public string JobCategoryName { get; set; }
    public int JobTitleId { get; set; }
    public string JobTitleName { get; set; }
    public int? JobDescriptionId { get; set; }
    public string JobDescriptionName { get; set; }
    public int? DirectorateId { get; set; }
    public string DirectorateName { get; set; }
    public int? Balance { get; set; }

    public decimal? MedicalBalance { get; set; }
    public string WifeName { get; set; }
    public int ChildrenCount { get; set; }
    public int? SubDirectorateId { get; set; }
    public string SubDirectorateName { get; set; }
    public int? DepartmentId { get; set; }
    public string DepartmentName { get; set; }
    public int? SectionId { get; set; }
    public string SectionName { get; set; }
    public int? PositionId { get; set; }
    public string PositionName { get; set; }
    public int? UnitId { get; set; }
    public string UnitName { get; set; }
    public bool IsPinned { get; set; }
    public DateOnly? DegreeDueDate { get; set; }
    public DateOnly? CategoryDueDate { get; set; }
}