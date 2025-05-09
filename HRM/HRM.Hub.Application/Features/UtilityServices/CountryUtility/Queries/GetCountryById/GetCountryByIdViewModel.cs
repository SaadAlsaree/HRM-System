namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryById;

public class GetCountryByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}