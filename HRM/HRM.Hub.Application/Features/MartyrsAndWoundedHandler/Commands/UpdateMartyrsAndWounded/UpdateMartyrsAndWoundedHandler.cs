
namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Commands.UpdateMartyrsAndWounded
{
    public class UpdateMartyrsAndWoundedHandler :
        UpdateHandler<MartyrsAndWounded, UpdateMartyrsAndWoundedCommend>,
        IRequestHandler<UpdateMartyrsAndWoundedCommend, Response<bool>>
    {
        public UpdateMartyrsAndWoundedHandler(IBaseRepository<MartyrsAndWounded> repositoryMartyrsAndWounded)
            : base(repositoryMartyrsAndWounded)
        {
        }

        public override Expression<Func<MartyrsAndWounded, bool>>
            EntityPredicate(UpdateMartyrsAndWoundedCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateMartyrsAndWoundedCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}