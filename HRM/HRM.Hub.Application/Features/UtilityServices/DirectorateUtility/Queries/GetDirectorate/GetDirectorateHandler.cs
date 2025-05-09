using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorate
{
    public class GetDirectorateHandler : GetAllWithCountHandler<Directorates, GetDirectorateViewModel, GetDirectorateQuery>, IRequestHandler<GetDirectorateQuery, Response<PagedResult<GetDirectorateViewModel>>>
    {
        public GetDirectorateHandler(IBaseRepository<Directorates> repositoryDirectorate)
            : base(repositoryDirectorate) { }

        public override Expression<Func<Directorates, GetDirectorateViewModel>> Selector => z => new GetDirectorateViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,
            ShortKey = z.ShortKey,

        };

        public override Func<IQueryable<Directorates>, IOrderedQueryable<Directorates>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetDirectorateViewModel>>> Handle(GetDirectorateQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

