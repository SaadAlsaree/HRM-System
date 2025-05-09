namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWoundedById;

public class GetMartyrsAndWoundedByIdQuery : IRequest<Response<GetMartyrsAndWoundedByIdViewModel>>
{
    public Guid Id { get; set; }
    public HealthStatus HealthStatus { get; set; }
    public Status Status { get; set; } = Status.None;

}