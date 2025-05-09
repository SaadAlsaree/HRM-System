namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullById;
public class GetHandPullByIdViewModel:BaseViewModel<Guid>
{
    public string WithdrawHandPullOrderNo { get; set; }
    public DateTime? WithdrawHandPullOrderDate { get; set; }
    public string RaiseHandPullOrderNo { get; set; }
    public DateTime? RaiseHandPullOrderDate { get; set; }
    public string Note { get; set; }
    public DateTime CreateAt { get; set; }
    public Guid? CreateBy { get; set; }
    public DateTime? LastUpdateAt { get; set; }
    public Guid? LastUpdateBy { get; set; }
}