using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Queries.GetProvinceList;

public class GetProvinceListHandler : GetAllHandler<Province, GetProvinceListViewModel, GetProvinceListQuery>, IRequestHandler<GetProvinceListQuery, Response<IEnumerable<GetProvinceListViewModel>>>
{
    public GetProvinceListHandler(IBaseRepository<Province> repositoryProvinceList)
        : base(repositoryProvinceList) { }

    public override Expression<Func<Province, GetProvinceListViewModel>> Selector => z => new GetProvinceListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Province>, IOrderedQueryable<Province>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetProvinceListViewModel>>> Handle(GetProvinceListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}