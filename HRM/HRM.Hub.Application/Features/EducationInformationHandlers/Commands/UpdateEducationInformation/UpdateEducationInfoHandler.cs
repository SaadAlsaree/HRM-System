using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.UpdateEducationInformation;
public class UpdateEducationInfoHandler :
        UpdateHandler<EducationInformation, UpdateEducationInfoCommand>,
        IRequestHandler<UpdateEducationInfoCommand, Response<bool>>
{
    public UpdateEducationInfoHandler(IBaseRepository<EducationInformation> repositoryEducationInfo)
        : base(repositoryEducationInfo)
    {
    }

    public override Expression<Func<EducationInformation, bool>>
        EntityPredicate(UpdateEducationInfoCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateEducationInfoCommand request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
