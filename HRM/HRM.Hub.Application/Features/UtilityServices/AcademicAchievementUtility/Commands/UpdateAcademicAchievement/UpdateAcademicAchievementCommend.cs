using HRM.Hub.Application.Helper;
using Swashbuckle.AspNetCore.Annotations;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.UpdateAcademicAchievement;

public class UpdateAcademicAchievementCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public int? JobDegreeId { get; set; }
    public string Name { get; set; }
}
