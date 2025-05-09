using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Queries.GetAcademicAchievementList;

public class GetAcademicCertificateListHandler : GetAllHandler<AcademicCertificateType, GetAcademicCertificateTypeListViewModel, GetAcademicCertificateTypeListQuery>,
    IRequestHandler<GetAcademicCertificateTypeListQuery, Response<IEnumerable<GetAcademicCertificateTypeListViewModel>>>
{
    public GetAcademicCertificateListHandler(IBaseRepository<AcademicCertificateType> repositoryAcademicCertificateList)
        : base(repositoryAcademicCertificateList) { }

    public override Expression<Func<AcademicCertificateType, GetAcademicCertificateTypeListViewModel>> Selector => z => new GetAcademicCertificateTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<AcademicCertificateType>, IOrderedQueryable<AcademicCertificateType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetAcademicCertificateTypeListViewModel>>> Handle(GetAcademicCertificateTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}