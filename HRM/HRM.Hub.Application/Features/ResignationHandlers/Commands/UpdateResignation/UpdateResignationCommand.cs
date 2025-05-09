using HRM.Hub.Application.Helper;
namespace HRM.Hub.Application.Features.ResignationHandlers.Commands.UpdateResignation;

public class UpdateResignationCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public string Reason { get; set; }
    public DateTime? RequestDate { get; set; }
    public string RequestNo { get; set; }
    public string ResignationOrderNo { get; set; }
    public DateTime? ResignationOrderDate { get; set; }
    public string SeparationOrderNo { get; set; }
    public DateTime? SeparationOrderDate { get; set; }
    public string Note { get; set; }
}
