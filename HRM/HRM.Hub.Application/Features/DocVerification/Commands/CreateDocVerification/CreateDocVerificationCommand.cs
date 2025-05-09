namespace HRM.Hub.Application.Features.DocVerification.Commands.CreateDocVerification;
public class CreateDocVerificationCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string DocumentNumber { get; set; }
    public DateOnly DocumentDate { get; set; }
    public string Recipient { get; set; }
    public bool Answered { get; set; }
    public DateOnly SendingDate { get; set; }
    public string Note { get; set; }
    public Guid? CreateBy { get; set; }
}