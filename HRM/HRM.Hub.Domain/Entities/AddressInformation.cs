namespace HRM.Hub.Domain.Entities;

public class AddressInformation: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public int GovernorateId { get; set; }

    public int ProvinceId { get; set; }
    public bool IsCurrent { get; set; }

    public int TerritoryId { get; set; }

    public string Area { get; set; }

    public string District { get; set; }

    public string StreetNo { get; set; }

    public string HouseNo { get; set; }

    public string NearestPoint { get; set; }

    public string Notes { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual Governorate Governorate { get; set; }

    public virtual Province Province { get; set; }

    public virtual Territory Territory { get; set; }
}
