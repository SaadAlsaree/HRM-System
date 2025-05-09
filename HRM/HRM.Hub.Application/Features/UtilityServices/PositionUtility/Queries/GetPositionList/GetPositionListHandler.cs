using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPositionList;

public class GetPositionListHandler : GetAllHandler<Position, GetPositionListViewModel, GetPositionListQuery>, IRequestHandler<GetPositionListQuery, Response<IEnumerable<GetPositionListViewModel>>>
{
    public GetPositionListHandler(IBaseRepository<Position> repositoryPositionList)
        : base(repositoryPositionList) { }

    public override Expression<Func<Position, GetPositionListViewModel>> Selector => z => new GetPositionListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Position>, IOrderedQueryable<Position>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetPositionListViewModel>>> Handle(GetPositionListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}