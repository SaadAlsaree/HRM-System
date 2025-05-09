using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Commands.UpdateStudyResult
{
    public class UpdateStudyResultHandler :
        UpdateHandler<StudyResult, UpdateStudyResultCommend>,
        IRequestHandler<UpdateStudyResultCommend, Response<bool>>
    {
        public UpdateStudyResultHandler(IBaseRepository<StudyResult> repositoryStudyResult)
            : base(repositoryStudyResult)
        {
        }

        public override Expression<Func<StudyResult, bool>>
            EntityPredicate(UpdateStudyResultCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateStudyResultCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
