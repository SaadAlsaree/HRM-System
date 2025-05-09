namespace HRM.Hub.Application.Features.Valuations.Queries.GetByIdValuation;
public class GetByIdValuationQuery : IRequest<Response<GetByIdValuationViewModel>>
{
    public Guid SecondaryId { get; set; }
    public Status Status { get; set; } = Status.None;

}