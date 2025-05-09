namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrder;
public class GetAdministrativeOrderHandler  : GetAllWithCountHandler<AdministrativeOrder, GetAdministrativeOrderViewModel, GetAdministrativeOrderQuery>, IRequestHandler<GetAdministrativeOrderQuery, Response<PagedResult<GetAdministrativeOrderViewModel>>>
{
    public GetAdministrativeOrderHandler(IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrder)
        : base(repositoryAdministrativeOrder) { }

    public override Expression<Func<AdministrativeOrder, GetAdministrativeOrderViewModel>> Selector => z => new GetAdministrativeOrderViewModel()
    {
        Id = z.Id,
        JobCode = z.Employee.JobCode,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        BookTitle = z.BookTitle,
        OrderDate = z.OrderDate,
        OrderNo = z.OrderNo,
        Status = z.StatusId,
        AdministrativeOrderType = z.AdministrativeOrderType,
        AdministrativeOrderTypeName = z.AdministrativeOrderType.GetDisplayName()
    };

    public override Func<IQueryable<AdministrativeOrder>, IOrderedQueryable<AdministrativeOrder>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAdministrativeOrderViewModel>>> Handle(GetAdministrativeOrderQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
