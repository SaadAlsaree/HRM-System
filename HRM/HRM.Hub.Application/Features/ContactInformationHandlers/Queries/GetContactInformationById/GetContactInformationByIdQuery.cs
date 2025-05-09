
namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetContactInformationById;

public class GetContactInformationByIdQuery : IRequest<Response<GetContactInformationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;


}