namespace HRM.Hub.Application.Features.DocVerification.Queries.GetByIdDocVerification;
public class GetByIdDocVerificationQuery : IRequest<Response<GetByIdDocVerificationViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}