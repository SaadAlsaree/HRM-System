using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Commands.CreateStudyResult
{
    public class CreateStudyResultHandler : CreateHandler<StudyResult, CreateStudyResultCommend>, IRequestHandler<CreateStudyResultCommend, Response<bool>>
    {
        public CreateStudyResultHandler(IBaseRepository<StudyResult> repositoryStudyResult)
            : base(repositoryStudyResult) { }

        protected override Expression<Func<StudyResult, bool>> ExistencePredicate(CreateStudyResultCommend request) => x => x.Name == request.Name;

        protected override StudyResult MapToEntity(CreateStudyResultCommend request)
        {
            return new StudyResult
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateStudyResultCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
