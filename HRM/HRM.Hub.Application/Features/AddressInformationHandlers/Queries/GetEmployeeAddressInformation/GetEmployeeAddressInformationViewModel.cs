namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetEmployeeAddressInformation;

public class GetEmployeeAddressInformationViewModel : BaseViewModel<Guid>
{
    public string Area { get; set; }
    public string District { get; set; }
    public string StreetNo { get; set; }
    public string HouseNo { get; set; }
    public string NearestPoint { get; set; }
    public string Notes { get; set; }
    public  int GovernorateId { get; set; }
    public  string GovernorateName { get; set; }
    public  int ProvinceId { get; set; }
    public  string ProvinceName { get; set; }
    public int TerritoryId { get; set; }
    public string TerritoryName { get; set; }
    public bool IsCurrent { get; set; }
   
}