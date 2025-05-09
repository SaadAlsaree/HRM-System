namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetAllMovements;

public class GetAllMovementsQueryHandler :
    GetAllWithCountHandler<Movements, GetAllMovementsDataViewModel, GetAllMovementsQuery>,
    IRequestHandler<GetAllMovementsQuery, Response<PagedResult<GetAllMovementsDataViewModel>>>
{
    public GetAllMovementsQueryHandler(IBaseRepository<Movements> repositoryMovements)
        : base(repositoryMovements)
    {
    }

    public override Expression<Func<Movements, GetAllMovementsDataViewModel>> Selector => x =>
        new GetAllMovementsDataViewModel()
        {
            Id = x.Id,
            EmployeeId = x.EmployeeId,
            FullName = x.Employee.FullName,
            FromDepartmentId = x.FromDepartmentId,
            FromDirectorateId = x.FromDirectorateId,
            FromSectionId = x.FromSectionId,
            FromSubDirectorateId = x.FromSubDirectorateId,
            FromUniteId = x.FromUniteId,
            ToDepartmentId = x.ToDepartmentId,
            ToDirectorateId = x.ToDirectorateId,
            ToSectionId = x.ToSectionId,
            ToSubDirectorateId = x.ToSubDirectorateId,
            ToUnitId = x.ToUnitId,
            HireDate = x.HireDate,
            Note = x.Note,
            OrderDate = x.OrderDate,
            HireOrderDate = x.HireOrderDate,
            HireOrderNo = x.HireOrderNo,
            ReleaseDate = x.ReleaseDate,
            OrderNo = x.OrderNo,
            ReleaseOrderDate = x.ReleaseOrderDate,
            ReleaseOrderNo = x.ReleaseOrderNo,
            Status = x.StatusId,
            FromDirectorateName = x.FromDirectorate.Name,
            FromSubDirectorateName = x.FromSubDirectorate.Name,
            FromDepartmentName = x.FromDepartment.Name,
            FromSectionName = x.FromSection.Name,
            FromUniteName = x.FromUnite.Name,
            ToDirectorateName = x.ToDirectorate.Name,
            ToSubDirectorateName = x.ToSubDirectorate.Name,
            ToDepartmentName = x.ToDepartment.Name,
            ToSectionName = x.ToSection.Name,
            ToUnitName = x.ToUnit.Name,
            StatusName = x.StatusId.GetDisplayName(),
            JobCode = x.Employee.JobCode,
            LotNumber = x.Employee.LotNumber,
        };

    public override Func<IQueryable<Movements>, IOrderedQueryable<Movements>> OrderBy =>
        order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAllMovementsDataViewModel>>> Handle(GetAllMovementsQuery request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}