using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Commands.UpdateTypeOfService
{
    public class UpdateTypeOfServiceHandler :
        UpdateHandler<TypeOfService, UpdateTypeOfServiceCommend>,
        IRequestHandler<UpdateTypeOfServiceCommend, Response<bool>>
    {
        public UpdateTypeOfServiceHandler(IBaseRepository<TypeOfService> repositoryTypeOfService)
            : base(repositoryTypeOfService)
        {
        }

        public override Expression<Func<TypeOfService, bool>>
            EntityPredicate(UpdateTypeOfServiceCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateTypeOfServiceCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}