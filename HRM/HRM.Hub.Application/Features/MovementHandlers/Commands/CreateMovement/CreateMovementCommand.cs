namespace HRM.Hub.Application.Features.MovementHandlers.Commands.CreateMovement;
public sealed record CreateMovementCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public int FromDirectorateId { get; set; }
    public int FromSubDirectorateId { get; set; }
    public int FromDepartmentId { get; set; }
    public int FromSectionId { get; set; }
    public int FromUniteId { get; set; }
    public int ToDirectorateId { get; set; }
    public int ToSubDirectorateId { get; set; }
    public int ToDepartmentId { get; set; }
    public int ToSectionId { get; set; }
    public int ToUnitId { get; set; }
    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseOrderDate { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public string Note { get; set; }
}