using HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.UpdatePromotion
{
    public class UpdatePromotionHandler :
        IRequestHandler<UpdatePromotionCommend, Response<bool>>
    {
        private readonly IBaseRepository<Promotion> _repositoryPromotion;
        private readonly IPromotionAllowanceCalculationService _calculationService;

        public UpdatePromotionHandler(
            IBaseRepository<Promotion> repositoryPromotion,
            IPromotionAllowanceCalculationService calculationService)
        {
            _repositoryPromotion = repositoryPromotion;
            _calculationService = calculationService;
        }

        public async Task<Response<bool>> Handle(UpdatePromotionCommend request,
            CancellationToken cancellationToken)
        {
            var entity = await _repositoryPromotion.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
            if (entity == null)
                return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

            entity.SentPromotionGroupId = request.SentPromotionGroupId;
            entity.JobDegreeId = request.DegreeToId ?? request.DegreeFromId ?? entity.JobDegreeId;
            entity.JobCategoryId = request.JobCategoryToId ?? request.JobCategoryFromId ?? entity.JobCategoryId;
            // The edit dialog always sends the current (already adjusted) due date; only a changed value is a manual
            // correction that re-derives the period start. Otherwise every edit would re-apply the adjustments.
            if (request.DueDateDegree.HasValue && request.DueDateDegree != entity.DueDateDegree)
            {
                entity.DueDateDegree = request.DueDateDegree;
                entity.DegreeStartDate = null;
            }
            if (request.DueDateCategory.HasValue) entity.DueDateCategory = request.DueDateCategory;
            entity.ServiceRecycle = request.ServiceRecycle;
            entity.Note = request.Note;
            entity.LastUpdateAt = DateTime.UtcNow;

            if (!_repositoryPromotion.Update(entity))
                return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

            _ = await _calculationService.CalculateAsync(entity.Id, "promotion-updated", cancellationToken);
            return SuccessMessage.Update.ToSuccessMessage(true);
        }
    }
}
