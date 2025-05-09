using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.CreateAcademicCertificateType
{
    public class CreateAcademicCertificateTypeHandler : CreateHandler<AcademicCertificateType, CreateAcademicCertificateTypeCommend>, IRequestHandler<CreateAcademicCertificateTypeCommend, Response<bool>>
    {
        public CreateAcademicCertificateTypeHandler(IBaseRepository<AcademicCertificateType> repositoryAcademicCertificateType)
            : base(repositoryAcademicCertificateType) { }

        protected override Expression<Func<AcademicCertificateType, bool>> ExistencePredicate(CreateAcademicCertificateTypeCommend request) => x => x.Name == request.Name;

        protected override AcademicCertificateType MapToEntity(CreateAcademicCertificateTypeCommend request)
        {
            return new AcademicCertificateType
            {
                Name = request.Name,
            };
        }

        public async Task<Response<bool>> Handle(CreateAcademicCertificateTypeCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
