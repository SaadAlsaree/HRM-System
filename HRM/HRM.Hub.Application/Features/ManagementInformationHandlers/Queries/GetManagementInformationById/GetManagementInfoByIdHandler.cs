namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationById;
public class GetManagementInfoByIdHandler : GetByIdHandler<ManagementInformation, GetManagementInfoByIdViewModel, GetManagementInfoByIdQuery>, IRequestHandler<GetManagementInfoByIdQuery, Response<GetManagementInfoByIdViewModel>>
{
    public GetManagementInfoByIdHandler(IBaseRepository<ManagementInformation> repositoryManagementInfo)
        : base(repositoryManagementInfo) { }

    public override Expression<Func<ManagementInformation, bool>> IdPredicate(GetManagementInfoByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<ManagementInformation, GetManagementInfoByIdViewModel>> Selector => z => new GetManagementInfoByIdViewModel()
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
    public async Task<Response<GetManagementInfoByIdViewModel>> Handle(GetManagementInfoByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
