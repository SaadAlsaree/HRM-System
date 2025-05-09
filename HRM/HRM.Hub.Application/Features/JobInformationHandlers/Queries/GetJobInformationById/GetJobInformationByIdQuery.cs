namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationById;
public class GetJobInformationByIdQuery : IRequest<Response<GetJobInformationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;
}