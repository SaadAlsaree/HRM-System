namespace HRM.Hub.Application.Features.AddressInformationHandlers.Commands.AddAddressInformation;

public class CreateAddressInformationHandler : CreateHandler<AddressInformation, CreateAddressInformationCommand>,
    IRequestHandler<CreateAddressInformationCommand, Response<bool>>
{
    private readonly IBaseRepository<AddressInformation> _addressInformationRepository;

    public CreateAddressInformationHandler(IBaseRepository<AddressInformation> addressInformationRepository)
        : base(addressInformationRepository)
    {
        _addressInformationRepository = addressInformationRepository;
    }

    protected override Expression<Func<AddressInformation, bool>> ExistencePredicate(
        CreateAddressInformationCommand request)
    {
        return x => false;
    }

    private async Task ChangeStatusToOld(CreateAddressInformationCommand request, CancellationToken cancellationToken)
    {
        // get all old current
        var oldAddressInformation = await _addressInformationRepository
            .Query(x => x.EmployeeId == request.EmployeeId)
            .ToListAsync(cancellationToken: cancellationToken);

        if (oldAddressInformation.Count > 0)
        {
            // change IsCurrent value and type of old current
            foreach (var position in oldAddressInformation)
            {
                position.IsCurrent = false;
            }

            await _addressInformationRepository.UpdateRange(oldAddressInformation,
                cancellationToken: cancellationToken);
        }
    }

    protected override AddressInformation MapToEntity(CreateAddressInformationCommand request)
    {
        return new AddressInformation
        {
            EmployeeId = request.EmployeeId,
            Notes = request.Notes,
            Area = request.Area,
            GovernorateId = request.GovernorateId,
            TerritoryId = request.TerritoryId,
            StreetNo = request.StreetNo,
            ProvinceId = request.ProvinceId,
            NearestPoint = request.NearestPoint,
            HouseNo = request.HouseNo,
            District = request.District,
            IsCurrent = true,
            CreateAt = DateTime.Now,
            CreateBy = request.CreateBy,
        };
    }

    public async Task<Response<bool>> Handle(CreateAddressInformationCommand request,
        CancellationToken cancellationToken)
    {
        await ChangeStatusToOld(request, cancellationToken);
        return await HandleBase(request, cancellationToken);
    }
}