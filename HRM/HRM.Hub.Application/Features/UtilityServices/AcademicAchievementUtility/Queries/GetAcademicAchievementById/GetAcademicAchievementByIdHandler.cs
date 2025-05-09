using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementById;
public class GetAcademicAchievementByIdHandler : GetByIdHandler<AcademicAchievement, GetAcademicAchievementByIdViewModel, GetAcademicAchievementByIdQuery>, IRequestHandler<GetAcademicAchievementByIdQuery, Response<GetAcademicAchievementByIdViewModel>>
{
    public GetAcademicAchievementByIdHandler(IBaseRepository<AcademicAchievement> repositoryAcademicAchievement)
        : base(repositoryAcademicAchievement) { }

    public override Expression<Func<AcademicAchievement, bool>> IdPredicate(GetAcademicAchievementByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<AcademicAchievement, GetAcademicAchievementByIdViewModel>> Selector => a => new GetAcademicAchievementByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        JobDegreeName = a.JobDegree.Name,
        JobDegreeId = a.JobDegreeId,
    };
    public async Task<Response<GetAcademicAchievementByIdViewModel>> Handle(GetAcademicAchievementByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
