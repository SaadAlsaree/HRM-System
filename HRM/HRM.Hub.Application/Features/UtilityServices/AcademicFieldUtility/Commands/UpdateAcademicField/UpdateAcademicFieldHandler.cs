using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Commands.UpdateAcademicField
{
    public class UpdateAcademicFieldHandler  :
        UpdateHandler<AcademicField, UpdateAcademicFieldCommend>,
        IRequestHandler<UpdateAcademicFieldCommend, Response<bool>>
    {
        public UpdateAcademicFieldHandler(IBaseRepository<AcademicField> repositoryAcademicField)
            : base(repositoryAcademicField)
        {
        }

        public override Expression<Func<AcademicField, bool>>
            EntityPredicate(UpdateAcademicFieldCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAcademicFieldCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}