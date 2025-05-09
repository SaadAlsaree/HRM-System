using HRM.Hub.Application.Features.ContactInformationHandlers.Commands.UpdateContactInformation;

namespace HRM.Hub.Application.Features.ContactInformationHandlers.Commands.UpdateContactInformation;

public class UpdateContactInformationHandler : UpdateHandler<ContactInformation, UpdateContactInformationCommand>,
    IRequestHandler<UpdateContactInformationCommand, Response<bool>>
{
    public UpdateContactInformationHandler(IBaseRepository<ContactInformation> repositoryContactInformation)
        : base(repositoryContactInformation)
    {
    }

    public override Expression<Func<ContactInformation, bool>>
        EntityPredicate(UpdateContactInformationCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateContactInformationCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}