using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Commands.CreateProvince
{
    public class CreateProvinceHandler : CreateHandler<Province, CreateProvinceCommend>, IRequestHandler<CreateProvinceCommend, Response<bool>>
    {
        private readonly IBaseRepository<Governorate> _repositoryGovernorate;
        public CreateProvinceHandler(IBaseRepository<Province> repositoryProvince, IBaseRepository<Governorate> repositoryGovernorate)
            : base(repositoryProvince)
        {
            _repositoryGovernorate = repositoryGovernorate;
        }

        protected override Expression<Func<Province, bool>> ExistencePredicate(CreateProvinceCommend request) =>
            x => x.Name == request.Name && (request.GovernorateId == null || x.GovernorateId == request.GovernorateId);

        protected override Province MapToEntity(CreateProvinceCommend request)
        {
            return new Province
            {
                Name = request.Name,
                GovernorateId = request.GovernorateId
            };
        }

        public async new Task<Response<bool>> Handle(CreateProvinceCommend request, CancellationToken cancellationToken)
        {
            if (request.GovernorateId != null)
            {
                var governorateExists = await _repositoryGovernorate.Find(
                    g => g.Id == request.GovernorateId, cancellationToken: cancellationToken);
                if (governorateExists == null)
                    return ErrorsMessage.NotExistOnCreate.ToErrorMessage(false);
            }
            return await HandleBase(request, cancellationToken);
        }
    }
}
