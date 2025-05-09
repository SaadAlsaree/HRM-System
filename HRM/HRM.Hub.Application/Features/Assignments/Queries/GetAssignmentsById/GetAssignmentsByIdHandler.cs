namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignmentsById;

public class GetAssignmentsByIdHandler : IRequestHandler<GetAssignmentsByIdQuery,
    Response<GetAssignmentsByIdViewModel>>
{
    private readonly IBaseRepository<Domain.Entities.Assignments> _repositoryAssignments;

    public GetAssignmentsByIdHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
    {
        _repositoryAssignments = repositoryAssignments ??
                                         throw new ArgumentNullException(nameof(repositoryAssignments));
    }

    public async Task<Response<GetAssignmentsByIdViewModel>> Handle(GetAssignmentsByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryAssignments
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetAssignmentsByIdViewModel()
            {
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                Id = a.Id,
                JobCode = a.Employee.JobCode,
                TypeOfAssignmentId = a.TypeOfAssignmentId,
                TypeOfAssignmentName = a.TypeOfAssignment.Name,
                OrderNo = a.OrderNo,
                OrderDate = a.OrderDate,
                AssignmentSite = a.AssignmentSite,
                AssignedFromOrganization = a.AssignedFromOrganization,
                AssignedToOrganization = a.AssignedToOrganization,
                DurationOfAssignment = a.DurationOfAssignment,
                ReleaseOrderDate = a.ReleaseOrderDate,
                ReleaseOrderNo = a.ReleaseOrderNo,
                ReleaseDate = a.ReleaseDate,
                HireOrderDate = a.HireOrderDate,
                HireOrderNo = a.HireOrderNo,
                AssignmentOrderNo = a.AssignmentOrderNo,
                AssignmentOrderDate = a.AssignmentOrderDate,
                LotNumber = a.Employee.LotNumber,
                HireDate = a.HireDate,
                EndOrderNo = a.EndOrderNo,
                EndOrderDate = a.EndOrderDate,
                EndReleaseOrderDate = a.EndReleaseOrderDate,
                EndReleaseOrderNo = a.EndReleaseOrderNo,
                EndHireNo = a.EndHireNo,
                EndHireDate = a.EndHireDate,
                Note = a.Note,
                Status = a.StatusId,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}