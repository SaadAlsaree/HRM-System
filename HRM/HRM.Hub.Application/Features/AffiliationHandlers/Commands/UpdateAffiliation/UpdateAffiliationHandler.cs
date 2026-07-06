
namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.UpdateAffiliation
{
    public class UpdateAffiliationHandler :
        UpdateHandler<Domain.Entities.Affiliation, UpdateAffiliationCommand>,
        IRequestHandler<UpdateAffiliationCommand, Response<bool>>
    {
        public UpdateAffiliationHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
            : base(repositoryAffiliation)
        {
        }

        public override Expression<Func<Domain.Entities.Affiliation, bool>>
            EntityPredicate(UpdateAffiliationCommand request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAffiliationCommand request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
