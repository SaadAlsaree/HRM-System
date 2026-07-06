namespace HRM.Hub.Application.Features.MovementHandlers.Commands.CreateMovement;
public class CreateMovementCommandHandler : CreateHandler<Movements, CreateMovementCommand>, IRequestHandler<CreateMovementCommand, Response<bool>>
{
    private readonly IMapper _mapper;
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;
    private readonly IBaseRepository<EmployeePosition> _repositoryEmployeePosition;
    public CreateMovementCommandHandler(
        IMapper mapper,
        IBaseRepository<Movements> movementsRepository,
        IBaseRepository<ManagementInformation> repositoryManagementInformation,
        IBaseRepository<EmployeePosition> repositoryEmployeePosition) : base(movementsRepository)
    {
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _repositoryManagementInformation = repositoryManagementInformation ?? throw new ArgumentNullException(nameof(repositoryManagementInformation));
        _repositoryEmployeePosition = repositoryEmployeePosition ?? throw new ArgumentNullException(nameof(repositoryEmployeePosition));
    }
    protected override Expression<Func<Movements, bool>>
        ExistencePredicate(CreateMovementCommand request) => request => false;
    protected override Movements MapToEntity(CreateMovementCommand request)
    {
        var movement = _mapper.Map<Movements>(request);

        movement.Id = Guid.NewGuid();
        return movement;
    }
    public async Task<Response<bool>> Handle(CreateMovementCommand request, CancellationToken cancellationToken)
    {
        // Update ManagementInformation with the new org chart values
        var find = await _repositoryManagementInformation.Find(z => z.Id == request.EmployeeId);
        if (find == null)
        {
            await _repositoryManagementInformation.Create(new ManagementInformation
            {
                Id = request.EmployeeId,
                DepartmentId = request.ToDepartmentId,
                DirectorateId = request.ToDirectorateId,
                SubDirectorateId = request.ToSubDirectorateId,
            });
        }
        else
        {
            find.DepartmentId = request.ToDepartmentId;
            find.DirectorateId = request.ToDirectorateId;
            find.SubDirectorateId = request.ToSubDirectorateId;
            _repositoryManagementInformation.Update(find);
        }

        // ASN-013: Update current active EmployeePosition org chart to match "To" values
        var activePosition = await _repositoryEmployeePosition.Find(x =>
            x.EmployeeId == request.EmployeeId && x.Status == Domain.Common.Enums.Status.Active && !x.IsDeleted);
        if (activePosition != null)
        {
            activePosition.DepartmentId = request.ToDepartmentId;
            activePosition.DirectorateId = request.ToDirectorateId;
            activePosition.SubDirectorateId = request.ToSubDirectorateId;
            activePosition.SectionId = request.ToSectionId;
            activePosition.UnitId = request.ToUnitId;
            activePosition.LastUpdateBy = null; // system update
            activePosition.LastUpdateAt = DateTime.Now;
            _repositoryEmployeePosition.Update(activePosition);
        }

        return await HandleBase(request, cancellationToken);
    }
}