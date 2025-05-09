namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationById;

public class GetAddressInformationByIdQuery : IRequest<Response<GetAddressInformationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;


}