using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Commands.CreateLaw;

public class CreateLawCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
