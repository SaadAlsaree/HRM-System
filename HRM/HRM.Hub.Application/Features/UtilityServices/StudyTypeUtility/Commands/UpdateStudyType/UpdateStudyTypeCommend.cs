using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Commands.UpdateStudyType;

public class UpdateStudyTypeCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public string Name { get; set; }
}
