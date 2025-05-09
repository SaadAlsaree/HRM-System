namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWounded;



public class GetMartyrsAndWoundedHandler : GetAllWithCountHandler<MartyrsAndWounded, GetMartyrsAndWoundedViewModel, GetMartyrsAndWoundedQuery>, IRequestHandler<GetMartyrsAndWoundedQuery, Response<PagedResult<GetMartyrsAndWoundedViewModel>>>
{
    public GetMartyrsAndWoundedHandler(IBaseRepository<MartyrsAndWounded> repositoryMartyrsAndWounded)
        : base(repositoryMartyrsAndWounded) { }

    public override Expression<Func<MartyrsAndWounded, GetMartyrsAndWoundedViewModel>> Selector => z => new GetMartyrsAndWoundedViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        DirectorateId = z.Employee.ManagementInformation.DirectorateId,
        DirectorateName = z.Employee.ManagementInformation.Directorate.Name,
        SubDirectorateId = z.Employee.ManagementInformation.SubDirectorateId,
        SubDirectorateName = z.Employee.ManagementInformation.SubDirectorate.Name,
        StartDate = z.Employee.ManagementInformation.Employee.JobInformation.HireDate,
        JobDegreeId = z.Employee.Promotion.JobDegreeId,
        JobDegreeName = z.Employee.Promotion.JobDegree.Name,
        JobCategoryId = z.Employee.Promotion.JobCategoryId,
        JobCategoryName = z.Employee.Promotion.JobCategory.Name,
        JobTitleId = z.Employee.ManagementInformation.JobTitleId,
        JobTitleName = z.Employee.ManagementInformation.JobTitle.Name,
        EmployeePositionId = z.Employee.ManagementInformation.PositionId,
        EmployeePositionName = z.Employee.ManagementInformation.Position.Name,
        EndDateOfService = z.EndDateOfService,
        Birthdate = z.Employee.BirthDate,
        RetirementDate = z.RetirementDate,
        AdministrativeOrderNo = z.AdministrativeOrderNo,
        AdministrativeOrderDate = z.AdministrativeOrderDate,
        IsPoliticallyDismissed = z.IsPoliticallyDismissed,
        DateOfMartyrdom = z.DateOfMartyrdom,
        Note = z.Note,
        Status = z.StatusId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
        MotherFullName = z.Employee.MotherFullName,
        GenderName = z.Employee.Gender.GetDisplayName(),
        HireDate = z.Employee.JobInformation.HireDate,
        DateOfDeath = z.DateOfDeath,
        HealthStatus = z.HealthStatus.GetDisplayName(),
    };

    public override Func<IQueryable<MartyrsAndWounded>, IOrderedQueryable<MartyrsAndWounded>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetMartyrsAndWoundedViewModel>>> Handle(GetMartyrsAndWoundedQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}