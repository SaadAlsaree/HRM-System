
namespace HRM.Hub.Application.Features.Assignments.Commands.CreateAssignments
{
    public class CreateAssignmentsHandler : CreateHandler<Domain.Entities.Assignments, CreateAssignmentsCommend>, IRequestHandler<CreateAssignmentsCommend, Response<bool>>
    {
        private readonly IBaseRepository<Domain.Entities.Assignments> _repositoryAssignments;

        public CreateAssignmentsHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
            : base(repositoryAssignments)
        {
            _repositoryAssignments = repositoryAssignments ?? throw new ArgumentNullException(nameof(repositoryAssignments));
        }

        protected override Expression<Func<Domain.Entities.Assignments, bool>> ExistencePredicate(CreateAssignmentsCommend request) => x => false;

        protected override Domain.Entities.Assignments MapToEntity(CreateAssignmentsCommend request)
        {
            return new Domain.Entities.Assignments
            {
                EmployeeId = request.EmployeeId,
                TypeOfAssignmentId = request.TypeOfAssignmentId,
                OrderNo = request.OrderNo,
                OrderDate = request.OrderDate,
                IssuingAuthority = request.IssuingAuthority,
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
            var requestEndDate = request.AssignmentOrderDate?.AddMonths(request.DurationOfAssignment ?? 0);

            var existingActiveAssignment = await _repositoryAssignments.Find(x =>
                x.EmployeeId == request.EmployeeId &&
                x.AssignmentSite == request.AssignmentSite &&
                x.StatusId == Status.Active &&
                x.AssignmentOrderDate <= requestEndDate,
                cancellationToken: cancellationToken);

            if (existingActiveAssignment != null)
                return Response<bool>.Fail(new MessageResponse
                {
                    Code = "10014",
                    Message = "يوجد تكليف نشط للموظف في نفس الفترة"
                });

            return await HandleBase(request, cancellationToken);
        }
    }
}
