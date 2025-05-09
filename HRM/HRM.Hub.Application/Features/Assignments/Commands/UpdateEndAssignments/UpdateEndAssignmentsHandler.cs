namespace HRM.Hub.Application.Features.Assignments.Commands.UpdateEndAssignments
{
    public class UpdateEndAssignmentsHandler :
        UpdateHandler<Domain.Entities.Assignments, UpdateEndAssignmentsCommend>,
        IRequestHandler<UpdateEndAssignmentsCommend, Response<bool>>
    {
        public UpdateEndAssignmentsHandler(IBaseRepository<Domain.Entities.Assignments> repositoryAssignments)
            : base(repositoryAssignments)
        {
        }

        public override Expression<Func<Domain.Entities.Assignments, bool>>
            EntityPredicate(UpdateEndAssignmentsCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateEndAssignmentsCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}