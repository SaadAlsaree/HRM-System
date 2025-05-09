using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Commands.UpdateProvince
{
    public class UpdateProvinceHandler :
        UpdateHandler<Province, UpdateProvinceCommend>,
        IRequestHandler<UpdateProvinceCommend, Response<bool>>
    {
        public UpdateProvinceHandler(IBaseRepository<Province> repositoryProvince)
            : base(repositoryProvince)
        {
        }

        public override Expression<Func<Province, bool>>
            EntityPredicate(UpdateProvinceCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateProvinceCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}