namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwnerById;

public class GetDepartmentOwnerByIdQueryHandler : IRequestHandler<GetDepartmentOwnerByIdQuery, Response<GetDepartmentOwnerByIdViewModel>>
{
    private readonly IBaseRepository<DepartmentOwner> _repository;

    public GetDepartmentOwnerByIdQueryHandler(IBaseRepository<DepartmentOwner> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<GetDepartmentOwnerByIdViewModel>> Handle(GetDepartmentOwnerByIdQuery request, CancellationToken cancellationToken)
    {
        var entity = await _repository.Find(
            filter: x => x.Id == request.Id && !x.IsDeleted,
            include: inc => inc.Include(x => x.Department).Include(x => x.Employee),
            cancellationToken: cancellationToken);

        if (entity == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetDepartmentOwnerByIdViewModel>(null);

        var result = new GetDepartmentOwnerByIdViewModel
        {
            Id = entity.Id,
            DepartmentId = entity.DepartmentId,
            DepartmentName = entity.Department?.Name,
            EmployeeId = entity.EmployeeId,
            EmployeeName = entity.Employee?.FullName,
            JobCode = entity.Employee?.JobCode,
            FromDate = entity.FromDate,
            ToDate = entity.ToDate,
            IsActive = entity.IsActive
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
