namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicCertificateTypeById;

public class GetAcademicCertificateTypeByIdHandler : IRequestHandler<GetAcademicCertificateTypeByIdQuery,
    Response<GetAcademicCertificateTypeByIdViewModel>>
{
    private readonly IBaseRepository<AcademicCertificateType> _repositoryAcademicCertificateType;

    public GetAcademicCertificateTypeByIdHandler(IBaseRepository<AcademicCertificateType> repositoryAcademicCertificateType)
    {
        _repositoryAcademicCertificateType = repositoryAcademicCertificateType ??
                                         throw new ArgumentNullException(nameof(repositoryAcademicCertificateType));
    }

    public async Task<Response<GetAcademicCertificateTypeByIdViewModel>> Handle(GetAcademicCertificateTypeByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryAcademicCertificateType
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetAcademicCertificateTypeByIdViewModel()
            {
                Id = a.Id,
                Name = a.Name,
                
                Status = a.StatusId
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}