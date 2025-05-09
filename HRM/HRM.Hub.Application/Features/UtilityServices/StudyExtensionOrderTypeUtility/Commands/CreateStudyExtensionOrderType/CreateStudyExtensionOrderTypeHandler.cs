using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Commands.CreateStudyExtensionOrderType
{
    public class CreateStudyExtensionOrderTypeHandler : CreateHandler<StudyExtensionOrderType, CreateStudyExtensionOrderTypeCommend>, IRequestHandler<CreateStudyExtensionOrderTypeCommend, Response<bool>>
    {
        public CreateStudyExtensionOrderTypeHandler(IBaseRepository<StudyExtensionOrderType> repositoryStudyExtensionOrderType)
            : base(repositoryStudyExtensionOrderType) { }

        protected override Expression<Func<StudyExtensionOrderType, bool>> ExistencePredicate(CreateStudyExtensionOrderTypeCommend request) => x => x.Name == request.Name;

        protected override StudyExtensionOrderType MapToEntity(CreateStudyExtensionOrderTypeCommend request)
        {
            return new StudyExtensionOrderType
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateStudyExtensionOrderTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
