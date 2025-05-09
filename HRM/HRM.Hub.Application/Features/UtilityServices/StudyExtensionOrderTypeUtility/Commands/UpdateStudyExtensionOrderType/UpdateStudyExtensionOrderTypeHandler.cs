using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.UpdateStudyExtensionOrderType
{
    public class UpdateStudyExtensionOrderTypeHandler :
        UpdateHandler<StudyExtensionOrderType, UpdateStudyExtensionOrderTypeCommend>,
        IRequestHandler<UpdateStudyExtensionOrderTypeCommend, Response<bool>>
    {
        public UpdateStudyExtensionOrderTypeHandler(IBaseRepository<StudyExtensionOrderType> repositoryStudyExtensionOrderType)
            : base(repositoryStudyExtensionOrderType)
        {
        }

        public override Expression<Func<StudyExtensionOrderType, bool>>
            EntityPredicate(UpdateStudyExtensionOrderTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateStudyExtensionOrderTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}