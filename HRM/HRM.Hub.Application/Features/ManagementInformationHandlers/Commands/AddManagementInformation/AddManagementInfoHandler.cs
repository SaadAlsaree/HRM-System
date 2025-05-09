using HRM.Hub.Application.Features.ManagementInformationHandlers.Commands.AddEmployeeServicermation;
using HRM.Hub.Application.Features.ManagementInformationHandlers.Commands.AddManagementInfoServicermation;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Commands.AddManagementInformation;
public class AddManagementInfoHandler : UpdateHandler<ManagementInformation, AddMangementInfoCommand>, IRequestHandler<AddMangementInfoCommand, Response<bool>>
{
    private readonly IBaseRepository<ManagementInformation> _repositoryManagment;

    public AddManagementInfoHandler(IBaseRepository<ManagementInformation> repositoryManagment)
        : base(repositoryManagment)
    {
        _repositoryManagment = repositoryManagment;
    }
    
    public async Task<Response<bool>> Handle(AddMangementInfoCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    public override Expression<Func<ManagementInformation, bool>> EntityPredicate(AddMangementInfoCommand request)
    {
        return x => x.Id == request.EmployeeId;
    }
}

    