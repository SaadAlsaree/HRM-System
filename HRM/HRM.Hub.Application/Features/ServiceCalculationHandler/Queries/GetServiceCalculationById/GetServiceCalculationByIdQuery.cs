namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Queries.GetServiceCalculationById;

public class GetServiceCalculationByIdQuery : IRequest<Response<GetServiceCalculationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}