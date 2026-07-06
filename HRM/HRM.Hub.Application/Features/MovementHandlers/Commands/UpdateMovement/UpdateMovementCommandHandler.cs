namespace HRM.Hub.Application.Features.MovementHandlers.Commands.UpdateMovement;
public class UpdateMovementCommandHandler : UpdateHandler<Movements, UpdateMovementCommand>, IRequestHandler<UpdateMovementCommand, Response<bool>>
{
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;

    public UpdateMovementCommandHandler(IBaseRepository<Movements> movementsRepository, IBaseRepository<ManagementInformation> repositoryManagementInformation)
        : base(movementsRepository)
    {
        _repositoryManagementInformation = repositoryManagementInformation ?? throw new ArgumentNullException(nameof(repositoryManagementInformation));
    }

    public override Expression<Func<Movements, bool>> EntityPredicate(UpdateMovementCommand request)
    {
        return x => x.Id == request.Id;
    }

    public async Task<Response<bool>> Handle(UpdateMovementCommand request, CancellationToken cancellationToken)
    {
        var movement = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

        if (movement == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        var find = await _repositoryManagementInformation.Find(z => z.Id == movement.EmployeeId, cancellationToken: cancellationToken);
        if (find == null)
        {
            await _repositoryManagementInformation.Create(new ManagementInformation
            {
                Id = movement.EmployeeId,
                DirectorateId = request.ToDirectorateId ?? movement.ToDirectorateId ?? 0,
                SubDirectorateId = request.ToSubDirectorateId ?? movement.ToSubDirectorateId,
                DepartmentId = request.ToDepartmentId ?? movement.ToDepartmentId,
            }, cancellationToken);
        }
        else
        {
            if (request.ToDirectorateId.HasValue)
                find.DirectorateId = request.ToDirectorateId.Value;
            if (request.ToSubDirectorateId.HasValue)
                find.SubDirectorateId = request.ToSubDirectorateId;
            if (request.ToDepartmentId.HasValue)
                find.DepartmentId = request.ToDepartmentId;
            _repositoryManagementInformation.Update(find);
        }

        return await HandleBase(request, cancellationToken);
    }
}