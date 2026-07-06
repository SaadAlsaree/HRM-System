namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.CreateDepartmentOwner;

public class CreateDepartmentOwnerHandler : IRequestHandler<CreateDepartmentOwnerCommand, Response<bool>>
{
    private readonly IBaseRepository<DepartmentOwner> _repository;

    public CreateDepartmentOwnerHandler(IBaseRepository<DepartmentOwner> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<bool>> Handle(CreateDepartmentOwnerCommand request, CancellationToken cancellationToken)
    {
        var entity = new DepartmentOwner
        {
            DepartmentId = request.DepartmentId,
            EmployeeId = request.EmployeeId,
            FromDate = request.FromDate,
            ToDate = request.ToDate,
            IsActive = request.IsActive
        };

        var result = await _repository.Create(entity, cancellationToken);
        return result != null ? SuccessMessage.Create.ToSuccessMessage(true) : ErrorsMessage.FailOnCreate.ToErrorMessage(false);
    }
}
