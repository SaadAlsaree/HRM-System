using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Commands.UpdateAttributes
{
    public class UpdateAttributesHandler :
        UpdateHandler<Attributes, UpdateAttributesCommend>,
        IRequestHandler<UpdateAttributesCommend, Response<bool>>
    {
        public UpdateAttributesHandler(IBaseRepository<Attributes> repositoryAttributes)
            : base(repositoryAttributes)
        {
        }

        public override Expression<Func<Attributes, bool>>
            EntityPredicate(UpdateAttributesCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAttributesCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}