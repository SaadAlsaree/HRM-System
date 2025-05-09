using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Commands.UpdateLaw
{
    public class UpdateLawHandler :
        UpdateHandler<Laws, UpdateLawCommend>,
        IRequestHandler<UpdateLawCommend, Response<bool>>
    {
        public UpdateLawHandler(IBaseRepository<Laws> repositoryLaw)
            : base(repositoryLaw)
        {
        }

        public override Expression<Func<Laws, bool>>
            EntityPredicate(UpdateLawCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateLawCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}