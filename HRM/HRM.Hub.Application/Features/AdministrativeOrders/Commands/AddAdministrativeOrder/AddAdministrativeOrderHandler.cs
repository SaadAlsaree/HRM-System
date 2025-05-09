namespace HRM.Hub.Application.Features.AdministrativeOrders.Commands.AddAdministrativeOrder;

public class AddAdministrativeOrderHandler : CreateHandler<AdministrativeOrder, AddAdministrativeOrderCommand>,
    IRequestHandler<AddAdministrativeOrderCommand, Response<bool>>
{
    public AddAdministrativeOrderHandler(IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrder)
        : base(repositoryAdministrativeOrder)
    {

    }

    protected override Expression<Func<AdministrativeOrder, bool>> ExistencePredicate(
        AddAdministrativeOrderCommand request)
        => x => false;


    protected override AdministrativeOrder MapToEntity(AddAdministrativeOrderCommand request)
    {
        return new AdministrativeOrder
        {
            Id = Guid.NewGuid(),
            BookTitle = request.BookTitle,
            EmployeeId = request.EmployeeId,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            CreateBy = request.CreateBy,
            AdministrativeOrderType = request.AdministrativeOrderType,
        };
    }

    public async Task<Response<bool>> Handle(AddAdministrativeOrderCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}