namespace HRM.Hub.Application.Features.AdministrativeOrders.Commands.UpdateAdministrativeOrder;

public class UpdateAdministrativeOrderHandler :
    UpdateHandler<AdministrativeOrder, UpdateAdministrativeOrderCommand>,
    IRequestHandler<UpdateAdministrativeOrderCommand, Response<bool>>
{
    public UpdateAdministrativeOrderHandler(IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrder)
        : base(repositoryAdministrativeOrder)
    {
    }

    public override Expression<Func<AdministrativeOrder, bool>>
        EntityPredicate(UpdateAdministrativeOrderCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateAdministrativeOrderCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
