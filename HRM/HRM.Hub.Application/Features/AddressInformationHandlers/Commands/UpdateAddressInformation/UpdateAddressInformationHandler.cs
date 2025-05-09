
namespace HRM.Hub.Application.Features.AddressInformationHandlers.Commands.UpdateAddressInformation;

public class UpdateAddressInformationHandler : UpdateHandler<AddressInformation, UpdateAddressInformationCommand>,
    IRequestHandler<UpdateAddressInformationCommand, Response<bool>>
{
    public UpdateAddressInformationHandler(IBaseRepository<AddressInformation> AddressInformationRepository)
        : base(AddressInformationRepository)
    {
    }

    public override Expression<Func<AddressInformation, bool>> EntityPredicate(UpdateAddressInformationCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateAddressInformationCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}