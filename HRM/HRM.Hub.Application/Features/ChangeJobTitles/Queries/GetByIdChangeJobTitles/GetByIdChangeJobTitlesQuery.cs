namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.GetByIdChangeJobTitles;
public class GetByIdChangeJobTitlesQuery:IRequest<Response<GetByIdChangeJobTitlesViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}