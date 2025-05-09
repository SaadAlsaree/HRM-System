using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.UpdateSubDirectorate
{
    public class UpdateSubDirectorateHandler :
        UpdateHandler<SubDirectorates, UpdateSubDirectorateCommend>,
        IRequestHandler<UpdateSubDirectorateCommend, Response<bool>>
    {
        public UpdateSubDirectorateHandler(IBaseRepository<SubDirectorates> repositorySubDirectorate)
            : base(repositorySubDirectorate)
        {
        }

        public override Expression<Func<SubDirectorates, bool>>
            EntityPredicate(UpdateSubDirectorateCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateSubDirectorateCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}