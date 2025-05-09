namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicCertificateType;

public class GetAcademicCertificateTypeHandler : GetAllWithCountHandler<AcademicCertificateType, GetAcademicCertificateTypeViewModel, GetAcademicCertificateTypeQuery>, IRequestHandler<GetAcademicCertificateTypeQuery, Response<PagedResult<GetAcademicCertificateTypeViewModel>>>
{
    public GetAcademicCertificateTypeHandler(IBaseRepository<AcademicCertificateType> repositoryAcademicCertificateType)
        : base(repositoryAcademicCertificateType) { }

    public override Expression<Func<AcademicCertificateType, GetAcademicCertificateTypeViewModel>> Selector => z => new GetAcademicCertificateTypeViewModel()
    {
        Id = z.Id,
        Name = z.Name,
        Status = z.StatusId,

    };

    public override Func<IQueryable<AcademicCertificateType>, IOrderedQueryable<AcademicCertificateType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAcademicCertificateTypeViewModel>>> Handle(GetAcademicCertificateTypeQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}