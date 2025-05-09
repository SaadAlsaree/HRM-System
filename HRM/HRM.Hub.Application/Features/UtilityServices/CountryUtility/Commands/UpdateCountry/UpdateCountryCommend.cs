using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.UpdateCountry;

public class UpdateCountryCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
