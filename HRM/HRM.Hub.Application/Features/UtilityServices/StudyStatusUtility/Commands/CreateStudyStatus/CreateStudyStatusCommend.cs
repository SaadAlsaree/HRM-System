using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Commands.CreateStudyStatus;

public class CreateStudyStatusCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
