using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.UpdateEmployeeApplicableLaw;
public class UpdateApplicableLawHandler :
        UpdateHandler<EmployeeApplicableLaws, UpdateApplicableLawCommand>,
        IRequestHandler<UpdateApplicableLawCommand, Response<bool>>
{
    public UpdateApplicableLawHandler(IBaseRepository<EmployeeApplicableLaws> repositoryApplicableLaw)
        : base(repositoryApplicableLaw)
    {
    }

    public override Expression<Func<EmployeeApplicableLaws, bool>>
        EntityPredicate(UpdateApplicableLawCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateApplicableLawCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
