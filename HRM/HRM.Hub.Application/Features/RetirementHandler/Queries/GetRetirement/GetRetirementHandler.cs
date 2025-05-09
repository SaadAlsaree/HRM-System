using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirement;



public class GetRetirementHandler : GetAllWithCountHandler<Retirement, GetRetirementViewModel, GetRetirementQuery>, IRequestHandler<GetRetirementQuery, Response<PagedResult<GetRetirementViewModel>>>
{
    public GetRetirementHandler(IBaseRepository<Retirement> repositoryRetirement)
        : base(repositoryRetirement) { }

    public override Expression<Func<Retirement, GetRetirementViewModel>> Selector => z => new GetRetirementViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        DirectorateId = z.DirectorateId,
        SubDirectorateId = z.SubDirectorateId,
        DirectorateName = z.Directorate.Name,
        SubDirectorateName = z.SubDirectorate.Name,
        StartDate = z.StartDate,
        AcademicAchievementId = z.AcademicAchievementId,
        JobDegreeId = z.JobDegreeId,
        JobCategoryId = z.JobCategoryId,
        JobTitleId = z.JobTitleId,
        AcademicAchievementName = z.AcademicAchievement.Name,
        JobDegreeName = z.JobDegree.Name,
        JobCategoryName = z.JobCategory.Name,
        JobTitleName = z.JobTitle.Name,
        DecisionToFixAge = z.DecisionToFixAge,
        EmployeePositionId = z.EmployeePositionId,
        EndDateOfService = z.EndDateOfService,
        Birthdate = z.Birthdate,
        RetirementDate = z.RetirementDate,
        AdministrativeOrderNo = z.AdministrativeOrderNo,
        AdministrativeOrderDate = z.AdministrativeOrderDate,
        IsPoliticallyDismissed = z.IsPoliticallyDismissed,
        Note = z.Note,
        Status = z.StatusId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
        StatisticalIndex = z.Employee.StatisticalIndex
    };

    public override Func<IQueryable<Retirement>, IOrderedQueryable<Retirement>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetRetirementViewModel>>> Handle(GetRetirementQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}