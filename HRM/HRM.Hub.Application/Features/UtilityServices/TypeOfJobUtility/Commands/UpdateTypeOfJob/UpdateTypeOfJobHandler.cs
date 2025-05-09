using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Commands.UpdateTypeOfJob
{
    public class UpdateTypeOfJobHandler :
        UpdateHandler<TypeOfJob, UpdateTypeOfJobCommend>,
        IRequestHandler<UpdateTypeOfJobCommend, Response<bool>>
    {
        public UpdateTypeOfJobHandler(IBaseRepository<TypeOfJob> repositoryTypeOfJob)
            : base(repositoryTypeOfJob)
        {
        }

        public override Expression<Func<TypeOfJob, bool>>
            EntityPredicate(UpdateTypeOfJobCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfJobCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}