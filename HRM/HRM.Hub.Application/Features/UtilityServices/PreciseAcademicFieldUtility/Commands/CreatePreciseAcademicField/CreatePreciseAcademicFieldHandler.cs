using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.CreatePreciseAcademicField
{
    public class CreatePreciseAcademicFieldHandler : CreateHandler<PreciseAcademicField, CreatePreciseAcademicFieldCommend>, IRequestHandler<CreatePreciseAcademicFieldCommend, Response<bool>>
    {
        public CreatePreciseAcademicFieldHandler(IBaseRepository<PreciseAcademicField> repositoryPreciseAcademicField)
            : base(repositoryPreciseAcademicField) { }

        protected override Expression<Func<PreciseAcademicField, bool>> ExistencePredicate(CreatePreciseAcademicFieldCommend request) => x => x.Name == request.Name;

        protected override PreciseAcademicField MapToEntity(CreatePreciseAcademicFieldCommend request)
        {
            return new PreciseAcademicField
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreatePreciseAcademicFieldCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
