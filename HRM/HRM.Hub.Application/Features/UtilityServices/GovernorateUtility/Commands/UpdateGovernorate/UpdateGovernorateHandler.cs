using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Commands.UpdateGovernorate
{
    public class UpdateGovernorateHandler :
        UpdateHandler<Governorate, UpdateGovernorateCommend>,
        IRequestHandler<UpdateGovernorateCommend, Response<bool>>
    {
        public UpdateGovernorateHandler(IBaseRepository<Governorate> repositoryGovernorate)
            : base(repositoryGovernorate)
        {
        }

        public override Expression<Func<Governorate, bool>>
            EntityPredicate(UpdateGovernorateCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateGovernorateCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}