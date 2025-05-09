using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceById;
public class GetEmployeeServiceByIdHandler : GetByIdHandler<EmployeeService, GetEmployeeServiceByIdViewModel, GetEmployeeServiceByIdQuery>, IRequestHandler<GetEmployeeServiceByIdQuery, Response<GetEmployeeServiceByIdViewModel>>
{
    public GetEmployeeServiceByIdHandler(IBaseRepository<EmployeeService> repositoryEmployeeService)
        : base(repositoryEmployeeService) { }

    public override Expression<Func<EmployeeService, bool>> IdPredicate(GetEmployeeServiceByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EmployeeService, GetEmployeeServiceByIdViewModel>> Selector => z => new GetEmployeeServiceByIdViewModel()
    {
        Id = z.Id,
        EmployeeName = z.Employee.FullName,
        EmployeeId = z.Id,
        RetirementCalculation = z.RetirementCalculation,
        PromotionCalculation = z.PromotionCalculation,
        Notes = z.Notes,
        Status = z.StatusId,


        FullName = z.Employee.FullName,
        LotNumber = z.Employee.LotNumber,
        JobCode = z.Employee.JobCode,

    };
    public async Task<Response<GetEmployeeServiceByIdViewModel>> Handle(GetEmployeeServiceByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
