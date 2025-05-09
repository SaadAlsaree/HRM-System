namespace HRM.Hub.Application.Features.MovementHandlers.Commands.CreateMovement;
public class CreateMovementCommandHandler : CreateHandler<Movements, CreateMovementCommand>, IRequestHandler<CreateMovementCommand, Response<bool>>
{
    private readonly IMapper _mapper;
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;
    public CreateMovementCommandHandler(IMapper mapper, IBaseRepository<Movements> movementsRepository, IBaseRepository<ManagementInformation> repositoryManagementInformation) : base(movementsRepository)
    {
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _repositoryManagementInformation = repositoryManagementInformation ?? throw new ArgumentNullException(nameof(mapper));
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
        var find = await _repositoryManagementInformation.Find(z => z.Id == request.EmployeeId);
        if (find == null)
        {
            await _repositoryManagementInformation.Create(new ManagementInformation
            {
                Id = request.EmployeeId,
                DepartmentId = request.FromDepartmentId,
                DirectorateId = request.ToDirectorateId,
                SubDirectorateId = request.ToSubDirectorateId,
            });
        }
        else
        {
            find.DepartmentId = request.FromDepartmentId;
            find.DirectorateId = request.ToDirectorateId;
            find.SubDirectorateId = request.ToSubDirectorateId;
            _repositoryManagementInformation.Update(find);
        }
        return await HandleBase(request, cancellationToken);
    }
}