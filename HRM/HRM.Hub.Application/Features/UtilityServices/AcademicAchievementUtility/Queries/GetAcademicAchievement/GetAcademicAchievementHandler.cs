using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievement;
public class GetAcademicAchievementHandler :
    GetAllWithCountHandler<AcademicAchievement, GetAcademicAchievementViewModel, GetAcademicAchievementQuery>,
    IRequestHandler<GetAcademicAchievementQuery, Response<PagedResult<GetAcademicAchievementViewModel>>>
{
    public GetAcademicAchievementHandler(IBaseRepository<AcademicAchievement> repositoryAcademicAchievement)
        : base(repositoryAcademicAchievement) { }

    public override Expression<Func<AcademicAchievement, GetAcademicAchievementViewModel>> Selector => z => new GetAcademicAchievementViewModel()
    {
        Id = z.Id,
        Name = z.Name,
        Status = z.StatusId,
        JobDegreeId = z.JobDegreeId,
        JobDegreeName = z.JobDegree.Name,
    };

    public override Func<IQueryable<AcademicAchievement>, IOrderedQueryable<AcademicAchievement>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAcademicAchievementViewModel>>> Handle(GetAcademicAchievementQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
