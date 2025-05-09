namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorate
{
    public class GetSubDirectorateHandler : GetAllWithCountHandler<SubDirectorates, GetSubDirectorateViewModel, GetSubDirectorateQuery>, IRequestHandler<GetSubDirectorateQuery, Response<PagedResult<GetSubDirectorateViewModel>>>
    {
        public GetSubDirectorateHandler(IBaseRepository<SubDirectorates> repositorySubDirectorate)
            : base(repositorySubDirectorate) { }

        public override Expression<Func<SubDirectorates, GetSubDirectorateViewModel>> Selector => z => new GetSubDirectorateViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

            ShortKey = z.ShortKey,
            DirectorateId = z.DirectorateId ?? 0,
            DirectorateName = z.Directorate.Name,
        };

        public override Func<IQueryable<SubDirectorates>, IOrderedQueryable<SubDirectorates>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetSubDirectorateViewModel>>> Handle(GetSubDirectorateQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
