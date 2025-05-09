namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationById;
public class GetManagementInfoByIdQuery : IRequest<Response<GetManagementInfoByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}