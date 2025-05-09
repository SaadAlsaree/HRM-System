namespace HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Queries.GetAcademicAchievementList;

public class GetAcademicAchievementListHandler: GetAllHandler<AcademicAchievement, GetAcademicAchievementListViewModel, GetAcademicAchievementListQuery>, IRequestHandler<GetAcademicAchievementListQuery, Response<IEnumerable<GetAcademicAchievementListViewModel>>>
{
    public GetAcademicAchievementListHandler(IBaseRepository<AcademicAchievement> repositoryAcademicAchievementList)
        : base(repositoryAcademicAchievementList) { }

    public override Expression<Func<AcademicAchievement, GetAcademicAchievementListViewModel>> Selector => z => new GetAcademicAchievementListViewModel()
    {
        Id = z.Id,
        JobDegreeId = z.JobDegreeId,
        JobDegreeName = z.JobDegree.Name,   
        Name = z.Name,
    };

    public override Func<IQueryable<AcademicAchievement>, IOrderedQueryable<AcademicAchievement>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetAcademicAchievementListViewModel>>> Handle(GetAcademicAchievementListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}