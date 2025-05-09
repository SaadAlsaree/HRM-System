using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Commands.UpdateStudyStatus
{
    public class UpdateStudyStatusHandler :
        UpdateHandler<StudyStatus, UpdateStudyStatusCommend>,
        IRequestHandler<UpdateStudyStatusCommend, Response<bool>>
    {
        public UpdateStudyStatusHandler(IBaseRepository<StudyStatus> repositoryStudyStatus)
            : base(repositoryStudyStatus)
        {
        }

        public override Expression<Func<StudyStatus, bool>>
            EntityPredicate(UpdateStudyStatusCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateStudyStatusCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}