namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeOrderById;

public class GetAdministrativeOrderByIdHandler : IRequestHandler<GetAdministrativeOrderByIdQuery,
    Response<GetAdministrativeOrderByIdViewModel>>
{
    private readonly IBaseRepository<AdministrativeOrder> _repositoryAdministrativeOrder;

    public GetAdministrativeOrderByIdHandler(IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrder)
    {
        _repositoryAdministrativeOrder = repositoryAdministrativeOrder ??
                                         throw new ArgumentNullException(nameof(repositoryAdministrativeOrder));
    }

    public async Task<Response<GetAdministrativeOrderByIdViewModel>> Handle(GetAdministrativeOrderByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryAdministrativeOrder
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetAdministrativeOrderByIdViewModel()
            {
                Id = a.Id,
                JobCode = a.Employee.JobCode,
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                BookTitle = a.BookTitle,
                OrderDate = a.OrderDate,
                OrderNo = a.OrderNo,
                Status = a.StatusId,
                AdministrativeOrderType = a.AdministrativeOrderType,
                AdministrativeOrderTypeName = a.AdministrativeOrderType.GetDisplayName()
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}