using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Commands.CreateStudyResult;

public class CreateStudyResultCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
