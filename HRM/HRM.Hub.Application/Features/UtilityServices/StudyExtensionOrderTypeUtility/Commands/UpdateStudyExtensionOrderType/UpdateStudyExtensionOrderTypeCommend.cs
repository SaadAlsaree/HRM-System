using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.UpdateStudyExtensionOrderType;

public class UpdateStudyExtensionOrderTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
