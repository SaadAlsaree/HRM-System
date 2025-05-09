namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationById;
public class GetResignationByIdQuery : IRequest<Response<GetResignationByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;


}