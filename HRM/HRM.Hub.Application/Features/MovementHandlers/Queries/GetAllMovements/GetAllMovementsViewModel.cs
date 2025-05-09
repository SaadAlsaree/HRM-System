namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetAllMovements;

public  class GetAllMovementsDataViewModel : BaseViewModel<Guid>
{

    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public int? FromDirectorateId { get; set; }
    public int? FromSubDirectorateId { get; set; }
    public int? FromDepartmentId { get; set; }
    public int? FromSectionId { get; set; }
    public int? FromUniteId { get; set; } // TODO must to rename this property
    public int? ToDirectorateId { get; set; }
    public int? ToSubDirectorateId { get; set; }
    public int? ToDepartmentId { get; set; }
    public int? ToSectionId { get; set; }
    public int? ToUnitId { get; set; }

    public string FromDirectorateName { get; set; }
    public string FromSubDirectorateName { get; set; }
    public string FromDepartmentName { get; set; }
    public string FromSectionName { get; set; }
    public string FromUniteName { get; set; } // TODO must to rename this property
    public string ToDirectorateName { get; set; }
    public string ToSubDirectorateName { get; set; }
    public string ToDepartmentName { get; set; }
    public string ToSectionName { get; set; }
    public string ToUnitName { get; set; }
    public DateOnly? ReleaseOrderDate { get; set; }
    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public string Note { get; set; }

}