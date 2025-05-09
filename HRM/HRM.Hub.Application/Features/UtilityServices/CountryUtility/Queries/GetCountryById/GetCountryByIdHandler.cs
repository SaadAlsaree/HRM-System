using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Queries.GetCountryById;
public class GetCountryByIdHandler : GetByIdHandler<Country, GetCountryByIdViewModel, GetCountryByIdQuery>, IRequestHandler<GetCountryByIdQuery, Response<GetCountryByIdViewModel>>
{
    public GetCountryByIdHandler(IBaseRepository<Country> repositoryCountry)
        : base(repositoryCountry) { }

    public override Expression<Func<Country, bool>> IdPredicate(GetCountryByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Country, GetCountryByIdViewModel>> Selector => a => new GetCountryByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
    };
    public async Task<Response<GetCountryByIdViewModel>> Handle(GetCountryByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
