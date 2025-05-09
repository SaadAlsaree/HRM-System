using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Commands.CreateStudyType;

public class CreateStudyTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
