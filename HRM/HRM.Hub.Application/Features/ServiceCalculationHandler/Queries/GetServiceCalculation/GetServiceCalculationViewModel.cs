namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Queries.GetServiceCalculation;

public class GetServiceCalculationViewModel:BaseViewModel<Guid>
{
   
    public int TypeOfServiceId { get; set; }

    public int? CountOfMonth { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public bool? IsPoliticalTermination { get; set; }

    public string Notes { get; set; }
    public string TypeOfServiceName { get; set; }

}