namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityById;

public class GetThanksAndSeniorityByIdQuery: IRequest<Response<GetThanksAndSeniorityByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}