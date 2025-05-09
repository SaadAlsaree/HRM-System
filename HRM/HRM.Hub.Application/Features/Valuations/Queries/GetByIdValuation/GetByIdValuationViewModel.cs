namespace HRM.Hub.Application.Features.Valuations.Queries.GetByIdValuation;
public class GetByIdValuationViewModel:BaseViewModel<Guid>
{
    public Guid SecondaryId { get; set; }
    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }
    public string Recommendation { get; set; }
    public int? TotalPoint { get; set; }
    public string ValuationType { get; set; }
    public List<ValuationPropertyById> ValuationProperties { get; set; } = new List<ValuationPropertyById>();
}
public class ValuationPropertyById
{
    public string ValuationKey { get; set; }
    public int? ValuationPoints { get; set; }
}