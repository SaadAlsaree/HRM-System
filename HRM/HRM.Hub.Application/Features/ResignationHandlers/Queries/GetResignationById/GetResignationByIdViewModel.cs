namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationById;
public class GetResignationByIdViewModel:BaseViewModel<Guid>
{
    public string Reason { get; set; }
    public DateTime? RequestDate { get; set; }
    public string RequestNo { get; set; }
    public string ResignationOrderNo { get; set; }
    public DateTime? ResignationOrderDate { get; set; }
    public string SeparationOrderNo { get; set; }
    public DateTime? SeparationOrderDate { get; set; }
    public string Note { get; set; }
    public DateOnly HireDate { get;  set; }
    public string GenderName { get;  set; }
}
