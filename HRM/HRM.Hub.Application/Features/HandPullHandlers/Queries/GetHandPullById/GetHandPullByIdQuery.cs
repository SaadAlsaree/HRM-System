namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullById;
public sealed record GetHandPullByIdQuery : IRequest<Response<GetHandPullByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}