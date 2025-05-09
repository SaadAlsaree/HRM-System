namespace HRM.Hub.Application.Features.DocVerification.Queries.GetAllDocVerification;
public class GetDocVerificationQuery : IRequest<Response<PagedResult<GetDocVerificationViewModel>>>, IPaginationQuery
{
    public int Id { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}