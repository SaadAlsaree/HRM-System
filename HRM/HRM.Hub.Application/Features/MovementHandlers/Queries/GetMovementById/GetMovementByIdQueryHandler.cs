namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetMovementById;

public class
    GetMovementByIdQueryHandler : IRequestHandler<GetMovementByIdQuery,
        Response<GetMovementByIdViewModel>>
{
    private readonly IBaseRepository<Movements> _repositoryMovements;

    public GetMovementByIdQueryHandler(IBaseRepository<Movements> repositoryMovements)
    {
        _repositoryMovements = repositoryMovements ??
                               throw new ArgumentNullException(nameof(repositoryMovements));
    }

    public async Task<Response<GetMovementByIdViewModel>> Handle(GetMovementByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryMovements
            .Query(x =>
                x.Id == request.MovementId)
            .Select(a => new GetMovementByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                FromDepartmentId = a.FromDepartmentId,
                FromDirectorateId = a.FromDirectorateId,
                FromSectionId = a.FromSectionId,
                FromSubDirectorateId = a.FromSubDirectorateId,
                FromUniteId = a.FromUniteId,
                ToDepartmentId = a.ToDepartmentId,
                ToDirectorateId = a.ToDirectorateId,
                ToSectionId = a.ToSectionId,
                ToSubDirectorateId = a.ToSubDirectorateId,
                ToUnitId = a.ToUnitId,
                HireDate = a.HireDate,
                ReleaseDate = a.ReleaseDate,
                HireOrderDate = a.HireOrderDate,
                HireOrderNo = a.HireOrderNo,
                Note = a.Note,
                OrderNo = a.OrderNo,
                OrderDate = a.OrderDate,
                ReleaseOrderNo = a.ReleaseOrderNo,
                ReleaseOrderDate = a.ReleaseOrderDate,
                Status = a.StatusId,
                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}