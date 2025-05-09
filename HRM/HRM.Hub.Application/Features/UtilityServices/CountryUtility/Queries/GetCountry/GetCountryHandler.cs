using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountry
{
    public class GetCountryHandler : GetAllWithCountHandler<Country, GetCountryViewModel, GetCountryQuery>, IRequestHandler<GetCountryQuery, Response<PagedResult<GetCountryViewModel>>>
    {
        public GetCountryHandler(IBaseRepository<Country> repositoryCountry)
            : base(repositoryCountry) { }

        public override Expression<Func<Country, GetCountryViewModel>> Selector => z => new GetCountryViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Country>, IOrderedQueryable<Country>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetCountryViewModel>>> Handle(GetCountryQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
