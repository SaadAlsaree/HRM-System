using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Commands.UpdateStudyType
{
    public class UpdateStudyTypeHandler :
        UpdateHandler<StudyType, UpdateStudyTypeCommend>,
        IRequestHandler<UpdateStudyTypeCommend, Response<bool>>
    {
        public UpdateStudyTypeHandler(IBaseRepository<StudyType> repositoryStudyType)
            : base(repositoryStudyType)
        {
        }

        public override Expression<Func<StudyType, bool>>
            EntityPredicate(UpdateStudyTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateStudyTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}