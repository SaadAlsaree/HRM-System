namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformationById;

public class GetMarriageInformationByIdQuery : IRequest<Response<GetMarriageInformationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}