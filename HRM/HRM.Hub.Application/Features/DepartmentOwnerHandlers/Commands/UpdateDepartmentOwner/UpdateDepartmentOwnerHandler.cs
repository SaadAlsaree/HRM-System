namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Commands.UpdateDepartmentOwner;

public class UpdateDepartmentOwnerHandler : IRequestHandler<UpdateDepartmentOwnerCommand, Response<bool>>
{
    private readonly IBaseRepository<DepartmentOwner> _repository;

    public UpdateDepartmentOwnerHandler(IBaseRepository<DepartmentOwner> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<bool>> Handle(UpdateDepartmentOwnerCommand request, CancellationToken cancellationToken)
    {
        var entity = await _repository.Find(x => x.Id == request.Id, null, cancellationToken: cancellationToken);
        if (entity == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        entity.DepartmentId = request.DepartmentId;
        entity.EmployeeId = request.EmployeeId;
        entity.FromDate = request.FromDate;
        entity.ToDate = request.ToDate;
        entity.IsActive = request.IsActive;
        entity.LastUpdateAt = DateTime.Now;

        var result = _repository.Update(entity);
        return result ? SuccessMessage.Update.ToSuccessMessage(true) : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
    }
}
