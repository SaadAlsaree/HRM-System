using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.CreatePromotion
{
    public class CreatePromotionHandler : CreateHandler<Promotion, CreatePromotionCommend>,
        IRequestHandler<CreatePromotionCommend, Response<bool>>
    {
        private readonly IBaseRepository<Promotion> _repositoryPromotion;

        public CreatePromotionHandler(IBaseRepository<Promotion> repositoryPromotion)
            : base(repositoryPromotion)
        {
            _repositoryPromotion = repositoryPromotion;
        }

        protected override Expression<Func<Promotion, bool>> ExistencePredicate(
            CreatePromotionCommend request)
            => x => false;


        protected override Promotion MapToEntity(CreatePromotionCommend request)
        {
            return new Promotion
            {
                Id = request.Id,
                SentPromotionGroupId = request.SentPromotionGroupId,
                DueDateDegree = request.DueDateDegree,
                DueDateCategory = request.DueDateCategory,
                Note = request.Note,
            };
        }

        public async Task<Response<bool>> Handle(CreatePromotionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}