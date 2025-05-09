using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.CountryUtility.Commands.UpdateCountry
{
    public class UpdateCountryHandler :
        UpdateHandler<Country, UpdateCountryCommend>,
        IRequestHandler<UpdateCountryCommend, Response<bool>>
    {
        public UpdateCountryHandler(IBaseRepository<Country> repositoryCountry)
            : base(repositoryCountry)
        {
        }

        public override Expression<Func<Country, bool>>
            EntityPredicate(UpdateCountryCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateCountryCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}