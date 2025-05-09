using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Commands.UpdateTypeOfAssignment
{
    public class UpdateTypeOfAssignmentHandler :
        UpdateHandler<TypeOfAssignment, UpdateTypeOfAssignmentCommend>,
        IRequestHandler<UpdateTypeOfAssignmentCommend, Response<bool>>
    {
        public UpdateTypeOfAssignmentHandler(IBaseRepository<TypeOfAssignment> repositoryTypeOfAssignment)
            : base(repositoryTypeOfAssignment)
        {
        }

        public override Expression<Func<TypeOfAssignment, bool>>
            EntityPredicate(UpdateTypeOfAssignmentCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfAssignmentCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}