namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementById;

public class GetRetirementByIdQuery : IRequest<Response<GetRetirementByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}