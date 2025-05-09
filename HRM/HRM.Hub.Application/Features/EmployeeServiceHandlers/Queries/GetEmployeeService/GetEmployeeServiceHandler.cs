namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeService;
public class GetEmployeeServiceHandler :
    GetAllWithCountHandler<EmployeeService, GetEmployeeServiceViewModel, GetEmployeeServiceQuery>,
    IRequestHandler<GetEmployeeServiceQuery, Response<PagedResult<GetEmployeeServiceViewModel>>>
{
    public GetEmployeeServiceHandler(IBaseRepository<EmployeeService> repositoryEmployeeService)
        : base(repositoryEmployeeService) { }

    public override Expression<Func<EmployeeService, GetEmployeeServiceViewModel>> Selector => z => new GetEmployeeServiceViewModel()
    {
        Id = z.Id,
        EmployeeName = z.Employee.FullName,
        EmployeeId = z.Id,
        RetirementCalculation = z.RetirementCalculation,
        PromotionCalculation = z.PromotionCalculation,
        Notes = z.Notes,
        Status = z.StatusId
    };
    public override Func<IQueryable<EmployeeService>, IOrderedQueryable<EmployeeService>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetEmployeeServiceViewModel>>> Handle(GetEmployeeServiceQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

