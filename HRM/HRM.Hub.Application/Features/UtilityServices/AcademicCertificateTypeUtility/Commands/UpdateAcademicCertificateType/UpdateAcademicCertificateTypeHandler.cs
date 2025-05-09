using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType
{
    public class UpdateAcademicCertificateTypeHandler :
        UpdateHandler<AcademicCertificateType, UpdateAcademicCertificateTypeCommend>,
        IRequestHandler<UpdateAcademicCertificateTypeCommend, Response<bool>>
    {
        public UpdateAcademicCertificateTypeHandler(IBaseRepository<AcademicCertificateType> repositoryAcademicCertificateType)
            : base(repositoryAcademicCertificateType)
        {
        }

        public override Expression<Func<AcademicCertificateType, bool>>
            EntityPredicate(UpdateAcademicCertificateTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateAcademicCertificateTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}