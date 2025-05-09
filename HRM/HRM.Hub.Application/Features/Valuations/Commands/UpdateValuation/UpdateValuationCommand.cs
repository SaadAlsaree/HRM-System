namespace HRM.Hub.Application.Features.Valuations.Commands.UpdateValuation;
public class UpdateValuationCommand : IRequest<Response<bool>>
{
    public Guid SecondaryId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? ValuationDate { get; set; }
    public string Recommendation { get; set; }
    public string ValuationType { get; set; }
    public string Notes { get; set; }

    public string BookNo { get; set; }
    public DateOnly BookDate { get; set; }
    public Guid? LastUpdateBy { get; set; }
    public List<UpdateValuationProperty> ValuationProperties { get; set; } = new List<UpdateValuationProperty>();
}
public class UpdateValuationProperty
{
    public string ValuationKey { get; set; }
    public int? ValuationPoints { get; set; }
}