using HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.UpdatePromotion
{
    public class UpdatePromotionHandler :
        UpdateHandler<Promotion, UpdatePromotionCommend>,
        IRequestHandler<UpdatePromotionCommend, Response<bool>>
    {
        public UpdatePromotionHandler(IBaseRepository<Promotion> repositoryPromotion)
            : base(repositoryPromotion)
        {
        }

        public override Expression<Func<Promotion, bool>>
            EntityPredicate(UpdatePromotionCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdatePromotionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}