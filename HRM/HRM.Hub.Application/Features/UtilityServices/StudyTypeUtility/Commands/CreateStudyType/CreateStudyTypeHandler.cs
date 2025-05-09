using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Commands.CreateStudyType
{
    public class CreateStudyTypeHandler : CreateHandler<StudyType, CreateStudyTypeCommend>, IRequestHandler<CreateStudyTypeCommend, Response<bool>>
    {
        public CreateStudyTypeHandler(IBaseRepository<StudyType> repositoryStudyType)
            : base(repositoryStudyType) { }

        protected override Expression<Func<StudyType, bool>> ExistencePredicate(CreateStudyTypeCommend request) => x => x.Name == request.Name;

        protected override StudyType MapToEntity(CreateStudyTypeCommend request)
        {
            return new StudyType
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateStudyTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
