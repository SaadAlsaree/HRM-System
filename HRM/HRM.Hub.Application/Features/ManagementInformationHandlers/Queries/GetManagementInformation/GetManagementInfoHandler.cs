namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformation;
public class GetManagementInfoHandler :
    GetAllWithCountHandler<ManagementInformation, GetManagementInfoViewModel, GetManagementInfoQuery>,
    IRequestHandler<GetManagementInfoQuery, Response<PagedResult<GetManagementInfoViewModel>>>
{
    public GetManagementInfoHandler(IBaseRepository<ManagementInformation> repositoryManagementInfo)
        : base(repositoryManagementInfo) { }

    public override Expression<Func<ManagementInformation, GetManagementInfoViewModel>> Selector => z => new GetManagementInfoViewModel()
    {
        Id = z.Id,
        EmployeeId = z.Id,
        EmployeeName = z.Employee.FullName,
        DirectorateName = z.Directorate.Name,
        SubDirectorateName = z.SubDirectorate.Name,
        DepartmentName = z.Department.Name,
        PositionName = z.Position.Name,
        EmploymentDegreeName = z.EmploymentDegree.Name,
        JobDegreeName = z.Employee.Promotion.JobDegree.Name,
        JobCategoryName = z.Employee.Promotion.JobCategory.Name,
        JobTitleName = z.JobTitle.Name,
        Notes = z.Notes,
        Status = z.StatusId,
        IsCurrent = z.IsCurrent,
        IsInHiring = z.IsInHiring,

        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
    };
    public override Func<IQueryable<ManagementInformation>, IOrderedQueryable<ManagementInformation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetManagementInfoViewModel>>> Handle(GetManagementInfoQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

