namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrderById;

public class GetAdministrativeOrderByIdQuery : IRequest<Response<GetAdministrativeOrderByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}