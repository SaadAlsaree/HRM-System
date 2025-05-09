namespace HRM.Hub.Application.Features.DocVerification.Queries.GetEmployeeDocVerification;
public class GetEmployeeDocVerificationQuery : IRequest<Response<GetEmployeeDocVerificationViewModel>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}