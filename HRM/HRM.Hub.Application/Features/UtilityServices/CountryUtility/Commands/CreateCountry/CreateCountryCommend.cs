using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.CreateCountry;

public class CreateCountryCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
