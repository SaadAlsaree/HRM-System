namespace HRM.Hub.Application.Features.Valuations.Commands.CreateValuation;
public class CreateValuationCommand:IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public DateOnly? ValuationDate { get; set; }
    public string Recommendation { get; set; }
    public string ValuationType { get; set; }
    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }
    public string Notes { get; set; }
    public Guid? CreateBy { get; set; }
    public List<ValuationProperty> ValuationProperties { get; set; } = new List<ValuationProperty>();
}
public class ValuationProperty
{
    public string ValuationKey { get; set; }
    public int? ValuationPoints { get; set; }
}