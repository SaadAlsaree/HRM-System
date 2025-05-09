using HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddEmployee;

namespace HRM.Hub.Application.Features.AddressInformationHandlers.Commands.AddAddressInformation;

public class CreateAddressInformationValidator: AbstractValidator<CreateAddressInformationCommand>
{
    public CreateAddressInformationValidator()
    {
        RuleFor(x => x.EmployeeId).NotEmpty();
        RuleFor(x => x.GovernorateId).NotEmpty();
        RuleFor(x => x.ProvinceId).NotEmpty();
        RuleFor(x => x.TerritoryId).NotEmpty();
    }
}