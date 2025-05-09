using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Commands.CreateAcademicField
{
    public class CreateAcademicFieldHandler : CreateHandler<AcademicField, CreateAcademicFieldCommend>, IRequestHandler<CreateAcademicFieldCommend, Response<bool>>
    {
        public CreateAcademicFieldHandler(IBaseRepository<AcademicField> repositoryAcademicField)
            : base(repositoryAcademicField) { }

        protected override Expression<Func<AcademicField, bool>> ExistencePredicate(CreateAcademicFieldCommend request) => x => x.Name == request.Name;

        protected override AcademicField MapToEntity(CreateAcademicFieldCommend request)
        {
            return new AcademicField
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateAcademicFieldCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
