namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.GetEmployeePositionById;

public class GetEmployeePositionByIdHandler : IRequestHandler<GetEmployeePositionByIdQuery,
    Response<GetEmployeePositionByIdViewModel>>
{
    private readonly IBaseRepository<EmployeePosition> _repositoryEmployeePosition;

    public GetEmployeePositionByIdHandler(IBaseRepository<EmployeePosition> repositoryEmployeePosition)
    {
        _repositoryEmployeePosition = repositoryEmployeePosition ??
                                         throw new ArgumentNullException(nameof(repositoryEmployeePosition));
    }

    public async Task<Response<GetEmployeePositionByIdViewModel>> Handle(GetEmployeePositionByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryEmployeePosition
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetEmployeePositionByIdViewModel()
            {
                Id = a.Id,
                LotNumber = a.Employee.LotNumber,
                JobCode = a.Employee.JobCode,
                AssignedDate = a.AssignedDate,
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                EmployeePositionType = a.EmployeePositionType,
                EndAssignedOrderNo = a.EndAssignedOrderNo,
                EndAssignedOrderDate = a.EndAssignedOrderDate,
                AssignedOrderDate = a.AssignedOrderDate,
                AssignedOrderNo = a.AssignedOrderNo,
                AdministrativeOrderDate = a.AdministrativeOrderDate,
                AdministrativeOrderNo = a.AdministrativeOrderNo,
                DirectorateId = a.DirectorateId,
                DirectorateName = a.Directorate.Name,
                SubDirectorateId = a.SubDirectorateId,
                SubDirectorateName = a.SubDirectorate.Name,
                DepartmentId = a.DepartmentId,
                DepartmentName = a.Department.Name,
                SectionId = a.SectionId,
                SectionName = a.Section.Name,
                UnitId = a.UnitId,
                UnitName = a.Unit.Name,
                PositionId = a.PositionId,
                PositionName = a.Position.Name,
                Note = a.Note,
                Status = a.StatusId,
                
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}