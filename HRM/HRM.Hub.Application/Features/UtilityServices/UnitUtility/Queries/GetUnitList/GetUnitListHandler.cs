using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnitList;

public class GetUnitListHandler : GetAllHandler<Units, GetUnitListViewModel, GetUnitListQuery>, IRequestHandler<GetUnitListQuery, Response<IEnumerable<GetUnitListViewModel>>>
{
    public GetUnitListHandler(IBaseRepository<Units> repositoryUnitList)
        : base(repositoryUnitList) { }

    public override Expression<Func<Units, GetUnitListViewModel>> Selector => z => new GetUnitListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Units>, IOrderedQueryable<Units>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetUnitListViewModel>>> Handle(GetUnitListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}