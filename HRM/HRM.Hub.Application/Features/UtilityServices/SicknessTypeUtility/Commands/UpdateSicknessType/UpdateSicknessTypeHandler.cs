using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Commands.UpdateSicknessType
{
    public class UpdateSicknessTypeHandler :
        UpdateHandler<SicknessType, UpdateSicknessTypeCommend>,
        IRequestHandler<UpdateSicknessTypeCommend, Response<bool>>
    {
        public UpdateSicknessTypeHandler(IBaseRepository<SicknessType> repositorySicknessType)
            : base(repositorySicknessType)
        {
        }

        public override Expression<Func<SicknessType, bool>>
            EntityPredicate(UpdateSicknessTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateSicknessTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}