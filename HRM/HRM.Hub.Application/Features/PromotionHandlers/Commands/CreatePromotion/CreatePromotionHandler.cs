namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.CreatePromotion
{
    public class CreatePromotionHandler : IRequestHandler<CreatePromotionCommend, Response<bool>>
    {
        private readonly IBaseRepository<Promotion> _repositoryPromotion;
        private readonly IPromotionAllowanceCalculationService _calculationService;

        public CreatePromotionHandler(
            IBaseRepository<Promotion> repositoryPromotion,
            IPromotionAllowanceCalculationService calculationService)
        {
            _repositoryPromotion = repositoryPromotion ?? throw new ArgumentNullException(nameof(repositoryPromotion));
            _calculationService = calculationService ?? throw new ArgumentNullException(nameof(calculationService));
        }

        public async Task<Response<bool>> Handle(CreatePromotionCommend request,
            CancellationToken cancellationToken)
        {
            var existingPromotion = await _repositoryPromotion.Find(
                x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);

            if (existingPromotion != null)
            {
                if (request.DegreeToId.HasValue && request.DegreeToId.Value > 0)
                    existingPromotion.JobDegreeId = request.DegreeToId.Value;
                else if (request.DegreeFromId.HasValue && request.DegreeFromId.Value > 0)
                    existingPromotion.JobDegreeId = request.DegreeFromId.Value;

                if (request.JobCategoryToId.HasValue && request.JobCategoryToId.Value > 0)
                    existingPromotion.JobCategoryId = request.JobCategoryToId.Value;
                else if (request.JobCategoryFromId.HasValue && request.JobCategoryFromId.Value > 0)
                    existingPromotion.JobCategoryId = request.JobCategoryFromId.Value;

                if (request.SentPromotionGroupId.HasValue)
                    existingPromotion.SentPromotionGroupId = request.SentPromotionGroupId;

                if (request.DueDateDegree.HasValue)
                    existingPromotion.DueDateDegree = request.DueDateDegree;

                if (request.DueDateCategory.HasValue)
                    existingPromotion.DueDateCategory = request.DueDateCategory;

                if (request.ServiceRecycle.HasValue)
                    existingPromotion.ServiceRecycle = request.ServiceRecycle;

                if (!string.IsNullOrWhiteSpace(request.Note))
                    existingPromotion.Note = request.Note;

                existingPromotion.LastUpdateAt = DateTime.UtcNow;

                if (!_repositoryPromotion.Update(existingPromotion))
                    return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
            }
            else
            {
                var newPromotion = new Promotion
                {
                    Id = request.EmployeeId,
                    SentPromotionGroupId = request.SentPromotionGroupId,
                    JobDegreeId = request.DegreeToId ?? request.DegreeFromId ?? 0,
                    JobCategoryId = request.JobCategoryToId ?? request.JobCategoryFromId ?? 0,
                    DueDateDegree = request.DueDateDegree,
                    DueDateCategory = request.DueDateCategory,
                    ServiceRecycle = request.ServiceRecycle,
                    Note = request.Note ?? string.Empty,
                    StatusId = Status.Active
                };

                await _repositoryPromotion.Create(newPromotion, cancellationToken);
            }

            try
            {
                _ = await _calculationService.CalculateAsync(request.EmployeeId, "promotion-created", cancellationToken);
            }
            catch
            {
                // Ignore background calculation exceptions
            }

            return SuccessMessage.Create.ToSuccessMessage(true);
        }
    }
}
