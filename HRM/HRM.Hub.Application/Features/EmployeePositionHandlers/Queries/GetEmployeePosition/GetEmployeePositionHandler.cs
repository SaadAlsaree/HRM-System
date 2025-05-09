namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeePosition;

public class GetEmployeePositionHandler : GetAllWithCountHandler<EmployeePosition, GetEmployeePositionViewModel, GetEmployeePositionQuery>, IRequestHandler<GetEmployeePositionQuery, Response<PagedResult<GetEmployeePositionViewModel>>>
{
    public GetEmployeePositionHandler(IBaseRepository<EmployeePosition> repositoryEmployeePosition)
        : base(repositoryEmployeePosition) { }

    public override Expression<Func<EmployeePosition, GetEmployeePositionViewModel>> Selector => z => new GetEmployeePositionViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        EndAssignedOrderNo = z.EndAssignedOrderNo,
        EmployeePositionType = z.EmployeePositionType,
        EndAssignedOrderDate = z.EndAssignedOrderDate,
        AssignedOrderDate = z.AssignedOrderDate,
        AssignedOrderNo = z.AssignedOrderNo,
        AdministrativeOrderDate = z.AdministrativeOrderDate,
        AdministrativeOrderNo = z.AdministrativeOrderNo,
        DirectorateId = z.DirectorateId,
        DirectorateName = z.Directorate.Name,
        SubDirectorateId = z.SubDirectorateId,
        SubDirectorateName = z.SubDirectorate.Name,
        DepartmentId = z.DepartmentId,
        DepartmentName = z.Department.Name,
        AssignedDate = z.AssignedDate,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
        SectionId = z.SectionId,
        SectionName = z.Section.Name,
        UnitId = z.UnitId,
        UnitName = z.Unit.Name,
        PositionId = z.PositionId,
        PositionName = z.Position.Name,
        Note = z.Note,
        Status = z.StatusId,
        

    };

    public override Func<IQueryable<EmployeePosition>, IOrderedQueryable<EmployeePosition>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetEmployeePositionViewModel>>> Handle(GetEmployeePositionQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}