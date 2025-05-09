namespace HRM.Hub.Application.Features.AddressInformationHandlers.Commands.AddAddressInformation;

public class CreateAddressInformationCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }

    public int GovernorateId { get; set; }

    public int ProvinceId { get; set; }

    public int TerritoryId { get; set; }

    public string Area { get; set; }

    public string District { get; set; }

    public string StreetNo { get; set; }

    public string HouseNo { get; set; }

    public string NearestPoint { get; set; }

    public string Notes { get; set; }

    public Guid? CreateBy { get; set; }
}