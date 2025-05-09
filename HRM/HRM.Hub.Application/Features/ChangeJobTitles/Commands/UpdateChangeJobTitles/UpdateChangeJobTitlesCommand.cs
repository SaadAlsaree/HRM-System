
namespace HRM.Hub.Application.Features.ChangeJobTitles.Commands.UpdateChangeJobTitles;
public class UpdateChangeJobTitlesCommand:IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public int? NewJobTitleId { get; set; }
    public int? NewJobDescriptionId { get; set; }
    public int? OldJobTitleId { get; set; }
    public int? OldJobDescriptionId { get; set; }
    public string OrderNo { get; set; }
    public DateOnly? OrderDate { get; set; }
    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
