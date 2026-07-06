using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Commands.CreateTerritory
{
    public class CreateTerritoryHandler : CreateHandler<Territory, CreateTerritoryCommend>, IRequestHandler<CreateTerritoryCommend, Response<bool>>
    {
        private readonly IBaseRepository<Province> _repositoryProvince;
        public CreateTerritoryHandler(IBaseRepository<Territory> repositoryTerritory, IBaseRepository<Province> repositoryProvince)
            : base(repositoryTerritory)
        {
            _repositoryProvince = repositoryProvince;
        }

        protected override Expression<Func<Territory, bool>> ExistencePredicate(CreateTerritoryCommend request) =>
            x => x.Name == request.Name && (request.ProvinceId == null || x.ProvinceId == request.ProvinceId);

        protected override Territory MapToEntity(CreateTerritoryCommend request)
        {
            return new Territory
            {
                Name = request.Name,
                ProvinceId = request.ProvinceId
            };
        }

        public async new Task<Response<bool>> Handle(CreateTerritoryCommend request, CancellationToken cancellationToken)
        {
            if (request.ProvinceId != null)
            {
                var provinceExists = await _repositoryProvince.Find(
                    p => p.Id == request.ProvinceId, cancellationToken: cancellationToken);
                if (provinceExists == null)
                    return ErrorsMessage.NotExistOnCreate.ToErrorMessage(false);
            }
            return await HandleBase(request, cancellationToken);
        }
    }
}
