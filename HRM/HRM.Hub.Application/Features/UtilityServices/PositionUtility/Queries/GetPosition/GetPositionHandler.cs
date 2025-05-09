using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPosition
{
    public class GetPositionHandler : GetAllWithCountHandler<Position, GetPositionViewModel, GetPositionQuery>, IRequestHandler<GetPositionQuery, Response<PagedResult<GetPositionViewModel>>>
    {
        public GetPositionHandler(IBaseRepository<Position> repositoryPosition)
            : base(repositoryPosition) { }

        public override Expression<Func<Position, GetPositionViewModel>> Selector => z => new GetPositionViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Position>, IOrderedQueryable<Position>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetPositionViewModel>>> Handle(GetPositionQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
