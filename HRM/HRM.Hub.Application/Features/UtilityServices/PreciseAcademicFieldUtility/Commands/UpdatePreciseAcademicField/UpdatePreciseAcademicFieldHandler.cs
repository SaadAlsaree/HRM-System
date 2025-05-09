using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Commands.UpdatePreciseAcademicField
{
    public class UpdatePreciseAcademicFieldHandler :
        UpdateHandler<PreciseAcademicField, UpdatePreciseAcademicFieldCommend>,
        IRequestHandler<UpdatePreciseAcademicFieldCommend, Response<bool>>
    {
        public UpdatePreciseAcademicFieldHandler(IBaseRepository<PreciseAcademicField> repositoryPreciseAcademicField)
            : base(repositoryPreciseAcademicField)
        {
        }

        public override Expression<Func<PreciseAcademicField, bool>>
            EntityPredicate(UpdatePreciseAcademicFieldCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdatePreciseAcademicFieldCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}