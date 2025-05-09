using HRM.Hub.Application.Features.ContactInformationHandlers.Commands.CreateContactInformation;

namespace HRM.Hub.Application.Features.ContactInformationHandlers.Commands.CreateContactInformation;

public class CreateContactInformationHandler : CreateHandler<ContactInformation, CreateContactInformationCommand>, IRequestHandler<CreateContactInformationCommand, Response<bool>>
{
    public CreateContactInformationHandler(IBaseRepository<ContactInformation> repository) : base(repository)
    {
    }

    protected override Expression<Func<ContactInformation, bool>> ExistencePredicate(CreateContactInformationCommand request) => x => x.PhoneNumber == request.PhoneNumber;


    protected override ContactInformation MapToEntity(CreateContactInformationCommand request)
    {
        return new ContactInformation
        {
            EmployeeId = request.EmployeeId,
            ContactName = request.ContactName,
            LevelOfRelationshipId = request.LevelOfRelationshipId,
            Notes = request.Notes,
            PhoneNumber = request.PhoneNumber,
            CreateBy = request.CreateBy
        };
    }

    public async Task<Response<bool>> Handle(CreateContactInformationCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}