namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryById;

public class GetCountryByIdQuery : IRequest<Response<GetCountryByIdViewModel>>
{
    public int Id { get; set; }
}