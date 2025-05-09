namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryList;

public class GetCountryListQuery : IRequest<Response<IEnumerable<GetCountryListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}