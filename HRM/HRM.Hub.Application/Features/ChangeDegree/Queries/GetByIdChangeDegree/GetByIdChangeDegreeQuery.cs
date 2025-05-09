namespace HRM.Hub.Application.Features.ChangeDegree.Queries.GetByIdChangeDegree;
public class GetByIdChangeDegreeQuery : IRequest<Response<GetByIdChangeDegreeViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}