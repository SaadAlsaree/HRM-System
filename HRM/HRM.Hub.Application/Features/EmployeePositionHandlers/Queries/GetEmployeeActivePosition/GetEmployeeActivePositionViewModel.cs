namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeeActivePosition;

public class GetEmployeeActivePositionViewModel
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public EmployeePositionTypeEnum EmployeePositionType { get; set; }
    public DateOnly? AssignedOrderDate { get; set; }
    public string AssignedOrderNo { get; set; }
    public DateOnly? AssignedDate { get; set; }
    public DateOnly? StartDate { get; set; }
    public DateOnly? AdministrativeOrderDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public int? DirectorateId { get; set; }
    public string DirectorateName { get; set; }
    public int? SubDirectorateId { get; set; }
    public string SubDirectorateName { get; set; }
    public int? DepartmentId { get; set; }
    public string DepartmentName { get; set; }
    public int? SectionId { get; set; }
    public string SectionName { get; set; }
    public int? UnitId { get; set; }
    public string UnitName { get; set; }
    public int? PositionId { get; set; }
    public string PositionName { get; set; }
    public string Note { get; set; }
}
