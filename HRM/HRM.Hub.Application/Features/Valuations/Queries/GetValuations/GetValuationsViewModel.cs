namespace HRM.Hub.Application.Features.Valuations.Queries.GetValuations;
public class GetValuationsViewModel:BaseViewModel<Guid>
{
    public Guid SecondaryId { get; set; }
    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }
    public string Recommendation { get; set; }
    public int? TotalPoint { get; set; }
    public string ValuationType { get; set; }
}