using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Commands.CreateTypeOfAssignment;

public class CreateTypeOfAssignmentCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
