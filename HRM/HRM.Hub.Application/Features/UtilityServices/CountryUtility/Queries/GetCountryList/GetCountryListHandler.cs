using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryList;

public class GetCountryListHandler: GetAllHandler<Country, GetCountryListViewModel, GetCountryListQuery>, IRequestHandler<GetCountryListQuery, Response<IEnumerable<GetCountryListViewModel>>>
{
    public GetCountryListHandler(IBaseRepository<Country> repositoryCountryList)
        : base(repositoryCountryList) { }

    public override Expression<Func<Country, GetCountryListViewModel>> Selector => z => new GetCountryListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Country>, IOrderedQueryable<Country>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetCountryListViewModel>>> Handle(GetCountryListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}