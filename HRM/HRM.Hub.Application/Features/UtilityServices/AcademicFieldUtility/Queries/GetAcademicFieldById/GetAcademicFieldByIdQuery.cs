using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementById;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicFieldById;

public class GetAcademicFieldByIdQuery : IRequest<Response<GetAcademicFieldByIdViewModel>>
{
    public int Id { get; set; }
}