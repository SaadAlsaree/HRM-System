namespace HRM.Hub.Application.Features.DocVerification.Queries.GetByIdDocVerification;
public class GetByIdDocVerificationViewModel : BaseViewModel<Guid>
{
    public Guid DocVerificationId { get; set; }
    public string DocumentNumber { get; set; }
    public DateOnly DocumentDate { get; set; }
    public string Recipient { get; set; }
    public bool Answered { get; set; }
    public DateOnly SendingDate { get; set; }
    public string Note { get; set; }
}
