using HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;

namespace HRM.Hub.Application.Features.Assignments.Commands.UpdateAssignments
{
    public class UpdateAssignmentsHandler :
        UpdateHandler<Domain.Entities.Assignments, UpdateAssignmentsCommend>,
        IRequestHandler<UpdateAssignmentsCommend, Response<bool>>
    {
        public UpdateAssignmentsHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
            : base(repositoryAssignments)
        {
        }

        public override Expression<Func<Domain.Entities.Assignments, bool>>
            EntityPredicate(UpdateAssignmentsCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAssignmentsCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}