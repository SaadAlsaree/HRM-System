namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignments;
public class GetAssignmentsHandler : GetAllWithCountHandler<Domain.Entities.Assignments, GetAssignmentsViewModel, GetAssignmentsQuery>, IRequestHandler<GetAssignmentsQuery, Response<PagedResult<GetAssignmentsViewModel>>>
{
    public GetAssignmentsHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
        : base(repositoryAssignments) { }

    public override Expression<Func<Domain.Entities.Assignments, GetAssignmentsViewModel>> Selector => z => new GetAssignmentsViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        TypeOfAssignmentId = z.TypeOfAssignmentId,
        TypeOfAssignmentName = z.TypeOfAssignment.Name,
        OrderNo = z.OrderNo,
        DirectorateName = z.Employee.ManagementInformation.Directorate.Name,
        LotNumber = z.Employee.LotNumber,
        SubDirectorateName = z.Employee.ManagementInformation.SubDirectorate.Name,
        OrderDate = z.OrderDate,
        AssignmentSite = z.AssignmentSite,
        AssignedFromOrganization = z.AssignedFromOrganization,
        AssignedToOrganization = z.AssignedToOrganization,
        DurationOfAssignment = z.DurationOfAssignment,
        ReleaseOrderDate = z.ReleaseOrderDate,
        ReleaseOrderNo = z.ReleaseOrderNo,
        AssignmentOrderDate  = z.AssignmentOrderDate,
        AssignmentOrderNo = z.AssignmentOrderNo,
        HireOrderNo = z.HireOrderNo,
        HireOrderDate = z.HireOrderDate,
        ReleaseDate = z.ReleaseDate,
        HireDate = z.HireDate,
        EndOrderNo = z.EndOrderNo,
        EndOrderDate = z.EndOrderDate,
        EndReleaseOrderDate = z.EndReleaseOrderDate,
        EndReleaseOrderNo = z.EndReleaseOrderNo,
        EndHireNo = z.EndHireNo,
        EndHireDate = z.EndHireDate,
        Note = z.Note,
        Status = z.StatusId
    };

    public override Func<IQueryable<Domain.Entities.Assignments>, IOrderedQueryable<Domain.Entities.Assignments>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAssignmentsViewModel>>> Handle(GetAssignmentsQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}