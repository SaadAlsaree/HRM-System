using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.ResignationHandlers.Commands.UpdateResignation;
public class UpdateResignationHandler :
        UpdateHandler<Resignation, UpdateResignationCommand>,
        IRequestHandler<UpdateResignationCommand, Response<bool>>
{
    public UpdateResignationHandler(IBaseRepository<Resignation> repositoryResignation)
        : base(repositoryResignation)
    {
    }

    public override Expression<Func<Resignation, bool>>
        EntityPredicate(UpdateResignationCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateResignationCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
