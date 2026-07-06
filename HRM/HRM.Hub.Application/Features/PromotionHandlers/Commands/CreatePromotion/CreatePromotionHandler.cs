using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.CreatePromotion
{
    public class CreatePromotionHandler : CreateHandler<Promotion, CreatePromotionCommend>,
        IRequestHandler<CreatePromotionCommend, Response<bool>>
    {
        private readonly IBaseRepository<Promotion> _repositoryPromotion;
        private readonly IPromotionAllowanceCalculationService _calculationService;

        public CreatePromotionHandler(
            IBaseRepository<Promotion> repositoryPromotion,
            IPromotionAllowanceCalculationService calculationService)
            : base(repositoryPromotion)
        {
            _repositoryPromotion = repositoryPromotion;
            _calculationService = calculationService;
        }

        protected override Expression<Func<Promotion, bool>> ExistencePredicate(
            CreatePromotionCommend request)
            => x => false;


        protected override Promotion MapToEntity(CreatePromotionCommend request)
        {
            return new Promotion
            {
                Id = request.EmployeeId,
                SentPromotionGroupId = request.SentPromotionGroupId,
                JobDegreeId = request.DegreeToId ?? request.DegreeFromId ?? 0,
                JobCategoryId = request.JobCategoryToId ?? request.JobCategoryFromId ?? 0,
                ServiceRecycle = request.ServiceRecycle,
                Note = request.Note,
            };
        }

        public async Task<Response<bool>> Handle(CreatePromotionCommend request,
            CancellationToken cancellationToken)
        {
            var response = await HandleBase(request, cancellationToken);
            if (!response.Succeeded)
                return response;

            _ = await _calculationService.CalculateAsync(request.EmployeeId, "promotion-created", cancellationToken);
            return response;
        }
    }
}
