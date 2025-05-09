
namespace HRM.Hub.Application.Features.Assignments.Commands.CreateAssignments
{
    public class CreateAssignmentsHandler : CreateHandler<Domain.Entities.Assignments, CreateAssignmentsCommend>, IRequestHandler<CreateAssignmentsCommend, Response<bool>>
    {
        public CreateAssignmentsHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
            : base(repositoryAssignments) { }

        protected override Expression<Func<Domain.Entities.Assignments, bool>> ExistencePredicate(CreateAssignmentsCommend request) => x => false;

        protected override Domain.Entities.Assignments MapToEntity(CreateAssignmentsCommend request)
        {
            return new Domain.Entities.Assignments
            {
                EmployeeId = request.EmployeeId,
                TypeOfAssignmentId = request.TypeOfAssignmentId,
                OrderNo = request.OrderNo,
                OrderDate = request.OrderDate,
                AssignmentSite = request.AssignmentSite,
                AssignedFromOrganization = request.AssignedFromOrganization,
                AssignedToOrganization = request.AssignedToOrganization,
                DurationOfAssignment = request.DurationOfAssignment,
                ReleaseOrderDate = request.ReleaseOrderDate,
                ReleaseOrderNo = request.ReleaseOrderNo,
                AssignmentOrderDate = request.AssignmentOrderDate,
                AssignmentOrderNo = request.AssignmentOrderNo,
                HireDate = request.HireDate,
                HireOrderDate = request.HireOrderDate,
                ReleaseDate = request.ReleaseDate,
                HireOrderNo = request.HireOrderNo,
                EndOrderNo = request.EndOrderNo,
                EndOrderDate = request.EndOrderDate,
                EndReleaseOrderDate = request.EndReleaseOrderDate,
                EndReleaseOrderNo = request.EndReleaseOrderNo,
                EndHireNo = request.EndHireNo,
                EndHireDate = request.EndHireDate,
                Note = request.Note,
                CreateBy = request.CreateBy
            };
        }

        public async Task<Response<bool>> Handle(CreateAssignmentsCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
