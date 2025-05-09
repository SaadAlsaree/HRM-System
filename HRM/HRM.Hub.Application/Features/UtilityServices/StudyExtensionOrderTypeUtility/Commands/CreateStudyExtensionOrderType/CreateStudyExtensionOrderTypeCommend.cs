using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.CreateStudyExtensionOrderType;

public class CreateStudyExtensionOrderTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }

}
