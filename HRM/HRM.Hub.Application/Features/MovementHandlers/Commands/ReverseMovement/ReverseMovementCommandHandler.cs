
namespace HRM.Hub.Application.Features.MovementHandlers.Commands.ReverseMovement;

public class ReverseMovementCommandHandler : IRequestHandler<ReverseMovementCommand, Response<bool>>
{
    private readonly IBaseRepository<Movements> _repositoryMovements;
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;

    public ReverseMovementCommandHandler(
        IBaseRepository<Movements> repositoryMovements,
        IBaseRepository<ManagementInformation> repositoryManagementInformation)
    {
        _repositoryMovements = repositoryMovements ?? throw new ArgumentNullException(nameof(repositoryMovements));
        _repositoryManagementInformation = repositoryManagementInformation ?? throw new ArgumentNullException(nameof(repositoryManagementInformation));
    }

    public async Task<Response<bool>> Handle(ReverseMovementCommand request, CancellationToken cancellationToken)
    {
        var movement = await _repositoryMovements.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

        if (movement == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        var managementInfo = await _repositoryManagementInformation.Find(
            z => z.Id == movement.EmployeeId, cancellationToken: cancellationToken);

        if (managementInfo == null)
        {
            await _repositoryManagementInformation.Create(new ManagementInformation
            {
                Id = movement.EmployeeId,
                DirectorateId = movement.FromDirectorateId ?? 0,
                SubDirectorateId = movement.FromSubDirectorateId,
                DepartmentId = movement.FromDepartmentId,
            }, cancellationToken);
        }
        else
        {
            managementInfo.DirectorateId = movement.FromDirectorateId ?? managementInfo.DirectorateId;
            managementInfo.SubDirectorateId = movement.FromSubDirectorateId;
            managementInfo.DepartmentId = movement.FromDepartmentId;
            _repositoryManagementInformation.Update(managementInfo);
        }

        movement.StatusId = Status.InActive;
        movement.LastUpdateAt = DateTime.Now;
        _repositoryMovements.Update(movement);

        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
