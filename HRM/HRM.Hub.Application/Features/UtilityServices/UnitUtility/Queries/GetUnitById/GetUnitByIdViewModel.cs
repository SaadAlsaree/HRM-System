namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnitById;

public class GetUnitByIdViewModel
{
    public int Id { get; set; }
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public int DepartmentId { get; set; }

    public int SectionId { get; set; }
    public string DirectorateName { get; set; }

    public string SubDirectorateName { get; set; }

    public string DepartmentName { get; set; }
    public string ShortKey { get; set; }
    public string SectionName { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}