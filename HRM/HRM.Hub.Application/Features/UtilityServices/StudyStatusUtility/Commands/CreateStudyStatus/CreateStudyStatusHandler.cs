using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Commands.CreateStudyStatus
{
    public class CreateStudyStatusHandler : CreateHandler<StudyStatus, CreateStudyStatusCommend>, IRequestHandler<CreateStudyStatusCommend, Response<bool>>
    {
        public CreateStudyStatusHandler(IBaseRepository<StudyStatus> repositoryStudyStatus)
            : base(repositoryStudyStatus) { }

        protected override Expression<Func<StudyStatus, bool>> ExistencePredicate(CreateStudyStatusCommend request) => x => x.Name == request.Name;

        protected override StudyStatus MapToEntity(CreateStudyStatusCommend request)
        {
            return new StudyStatus
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateStudyStatusCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
