
namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.Get;

public class GetCorrectingAcademicAchievementHandler : GetAllWithCountHandler<CorrectingAcademicAchievements, GetCorrectingAcademicAchievementViewModel,
    GetCorrectingAcademicAchievementQuery>,
IRequestHandler<GetCorrectingAcademicAchievementQuery, Response<PagedResult<GetCorrectingAcademicAchievementViewModel>>>
{
    public GetCorrectingAcademicAchievementHandler(IBaseRepository<CorrectingAcademicAchievements> repository) : base(repository)
    {
    }

    public override Expression<Func<CorrectingAcademicAchievements, GetCorrectingAcademicAchievementViewModel>> Selector => x => new GetCorrectingAcademicAchievementViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        LotNumber = x.Employee.LotNumber,
        BookDate = x.BookDate,
        BookNo = x.BookNo,
        DegreeFromId = x.DegreeFromId,
        DegreeFromName = x.DegreeFrom.Name,
        DegreeToId = x.DegreeToId,
        DegreeToName = x.DegreeTo.Name,
        DueDateCategory = x.DueDateCategory,
        DueDateDegree = x.DueDateDegree,
        JobTitleToId = x.JobTitleToId,
        JobTitleFromId = x.JobTitleFromId,
        JobDescriptionFromId = x.JobDescriptionFromId,
        JobDescriptionToId = x.JobDescriptionToId,
        JobCategoryFromId = x.JobCategoryFromId,
        JobCategoryFromName = x.JobCategoryFrom.Name,
        IsCertificateCalculation = x.IsCertificateCalculation,
        JobCategoryToId = x.JobCategoryToId,
        JobCategoryToName = x.JobCategoryTo.Name,
        JobDescriptionFromName = x.JobDescriptionFrom.Name,
        JobDescriptionToName = x.JobDescriptionTo.Name,
        JobTitleFromName = x.JobTitleFrom.Name,
        JobTitleToName = x.JobTitleTo.Name,
        AcademicAchievementId = x.AcademicAchievementId,
        AcademicAchievementName = x.AcademicAchievement.Name,
        Note = x.Note,
        Status = x.StatusId
    };

    public override Func<IQueryable<CorrectingAcademicAchievements>, IOrderedQueryable<CorrectingAcademicAchievements>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetCorrectingAcademicAchievementViewModel>>> Handle(GetCorrectingAcademicAchievementQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}