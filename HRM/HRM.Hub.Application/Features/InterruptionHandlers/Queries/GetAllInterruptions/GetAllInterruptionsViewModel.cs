namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetAllInterruptions;
public class GetAllInterruptionsViewModel : BaseViewModel<Guid>
{
    public DateTime? NotificationDate { get; set; }
    public string Reason { get; set; }
    public string Note { get; set; }
    public DateTime CreateAt { get; set; }
    public Guid? CreateBy { get; set; }
    public DateTime? LastUpdateAt { get; set; }
    public Guid? LastUpdateBy { get; set; }
}