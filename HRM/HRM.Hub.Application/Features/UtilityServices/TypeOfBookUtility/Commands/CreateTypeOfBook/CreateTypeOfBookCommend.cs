using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.CreateTypeOfBook;

public class CreateTypeOfBookCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
