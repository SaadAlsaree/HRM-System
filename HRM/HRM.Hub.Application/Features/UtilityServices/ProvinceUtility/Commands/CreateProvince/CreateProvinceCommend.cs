using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Commands.CreateProvince;

public class CreateProvinceCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
