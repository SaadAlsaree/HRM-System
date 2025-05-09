using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Commands.UpdateDirectorate
{
    public class UpdateDirectorateHandler :
        UpdateHandler<Directorates, UpdateDirectorateCommend>,
        IRequestHandler<UpdateDirectorateCommend, Response<bool>>
    {
        public UpdateDirectorateHandler(IBaseRepository<Directorates> repositoryDirectorate)
            : base(repositoryDirectorate)
        {
        }

        public override Expression<Func<Directorates, bool>>
            EntityPredicate(UpdateDirectorateCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateDirectorateCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}