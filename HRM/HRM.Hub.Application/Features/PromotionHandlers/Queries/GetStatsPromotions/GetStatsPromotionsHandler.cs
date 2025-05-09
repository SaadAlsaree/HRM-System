namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotions
{
    public class GetStatsPromotionsHandler : IRequestHandler<GetStatsPromotionsQuery, Response<IEnumerable<GetStatsPromotionsViewModel>>>
    {
        private readonly IBaseRepository<Promotion> _repositoryPromotion;
        public GetStatsPromotionsHandler(IBaseRepository<Promotion> repositoryPromotion)
        {
            _repositoryPromotion = repositoryPromotion ?? throw new ArgumentNullException(nameof(repositoryPromotion));
        }
        public async Task<Response<IEnumerable<GetStatsPromotionsViewModel>>> Handle(GetStatsPromotionsQuery request, CancellationToken cancellationToken)
        {
            var result = await _repositoryPromotion
                .GetQueryable()

                .Where(x => request == null || x.StatusId == x.StatusId)

                .OrderByDescending(x => x.CreateAt)
                .Skip(request.Skip)
                .Take(request.Take)
                .Select(x => new GetStatsPromotionsViewModel
                {
                    //Attachments = x.Attachments,
                    //NewJobTitleName = x.NewJobTitle.Name,
                    //OldJobTitleName = x.OldJobDescription.Name,
                    Note = x.Note,
                    Status = x.StatusId
                })
                .ToListAsync(cancellationToken:cancellationToken);


            if (result.Count == 0)
                return ErrorsMessage.NotFoundData.ToErrorMessage<IEnumerable<GetStatsPromotionsViewModel>>(null);

            return SuccessMessage.Get.ToSuccessMessage(result.AsEnumerable());
        }
    }
}
