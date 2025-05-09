using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Commands.CreateProvince
{
    public class CreateProvinceHandler : CreateHandler<Province, CreateProvinceCommend>, IRequestHandler<CreateProvinceCommend, Response<bool>>
    {
        public CreateProvinceHandler(IBaseRepository<Province> repositoryProvince)
            : base(repositoryProvince) { }

        protected override Expression<Func<Province, bool>> ExistencePredicate(CreateProvinceCommend request) => x => x.Name == request.Name;

        protected override Province MapToEntity(CreateProvinceCommend request)
        {
            return new Province
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateProvinceCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
