using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Commands.CreateTypeOfSeniority;

public class CreateTypeOfSeniorityCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
