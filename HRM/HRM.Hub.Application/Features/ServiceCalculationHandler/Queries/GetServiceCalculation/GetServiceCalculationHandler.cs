namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Queries.GetServiceCalculation;



public class GetServiceCalculationHandler : GetAllWithCountHandler<ServiceCalculation, GetServiceCalculationViewModel, GetServiceCalculationQuery>, IRequestHandler<GetServiceCalculationQuery, Response<PagedResult<GetServiceCalculationViewModel>>>
{
    public GetServiceCalculationHandler(IBaseRepository<ServiceCalculation> repositoryServiceCalculation)
        : base(repositoryServiceCalculation) { }

    public override Expression<Func<ServiceCalculation, GetServiceCalculationViewModel>> Selector => z => new GetServiceCalculationViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        TypeOfServiceId = z.TypeOfServiceId,
        TypeOfServiceName = z.TypeOfService.Name,
        CountOfMonth = z.CountOfMonth,
        OrderNo = z.OrderNo,
        OrderDate = z.OrderDate,
        IsPoliticalTermination = z.IsPoliticalTermination,
        Notes = z.Notes,
        Status = z.StatusId,
        StatusName = z.StatusId.GetDisplayName(),
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,

    };

    public override Func<IQueryable<ServiceCalculation>, IOrderedQueryable<ServiceCalculation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetServiceCalculationViewModel>>> Handle(GetServiceCalculationQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}