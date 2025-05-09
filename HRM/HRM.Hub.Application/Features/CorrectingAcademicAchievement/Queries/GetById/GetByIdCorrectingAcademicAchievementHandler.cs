


namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.GetById;
public class GetByIdCorrectingAcademicAchievementHandler : GetByIdHandler<CorrectingAcademicAchievements,
    GetByIdCorrectingAcademicAchievementViewModel, GetByIdCorrectingAcademicAchievementQuery>,
        IRequestHandler<GetByIdCorrectingAcademicAchievementQuery, Response<GetByIdCorrectingAcademicAchievementViewModel>>
{
    public GetByIdCorrectingAcademicAchievementHandler(IBaseRepository<CorrectingAcademicAchievements> repository) : base(repository)
    {
    }

    public override Expression<Func<CorrectingAcademicAchievements, GetByIdCorrectingAcademicAchievementViewModel>>
        Selector => x => new GetByIdCorrectingAcademicAchievementViewModel()
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
            JobCategoryToId = x.JobCategoryToId,
            JobCategoryToName = x.JobCategoryTo.Name,
            JobDescriptionFromName = x.JobDescriptionFrom.Name,
            JobDescriptionToName = x.JobDescriptionTo.Name,
            JobTitleFromName = x.JobTitleFrom.Name,
            JobTitleToName = x.JobTitleTo.Name,
            IsCertificateCalculation = x.IsCertificateCalculation,
            AcademicAchievementId = x.AcademicAchievementId,
            AcademicAchievementName = x.AcademicAchievement.Name,
            Note = x.Note,
            Status = x.StatusId
        };

    public async Task<Response<GetByIdCorrectingAcademicAchievementViewModel>>
        Handle(GetByIdCorrectingAcademicAchievementQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);

    public override Expression<Func<CorrectingAcademicAchievements, bool>>
    IdPredicate(GetByIdCorrectingAcademicAchievementQuery request) => x => x.Id == request.Id;
}