using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.CreateCountry
{
    public class CreateCountryHandler : CreateHandler<Country, CreateCountryCommend>, IRequestHandler<CreateCountryCommend, Response<bool>>
    {
        public CreateCountryHandler(IBaseRepository<Country> repositoryCountry)
            : base(repositoryCountry) { }

        protected override Expression<Func<Country, bool>> ExistencePredicate(CreateCountryCommend request) => x => x.Name == request.Name;

        protected override Country MapToEntity(CreateCountryCommend request)
        {
            return new Country
            {
                Name = request.Name,
            };
        }

        public async Task<Response<bool>> Handle(CreateCountryCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
