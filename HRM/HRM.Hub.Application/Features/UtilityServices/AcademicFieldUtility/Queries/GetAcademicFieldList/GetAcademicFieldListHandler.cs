using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicFieldUtility.Queries.GetAcademicFieldList;

public class GetAcademicFieldListHandler: GetAllHandler<AcademicField, GetAcademicFieldListViewModel, GetAcademicFieldListQuery>, IRequestHandler<GetAcademicFieldListQuery, Response<IEnumerable<GetAcademicFieldListViewModel>>>
{
    public GetAcademicFieldListHandler(IBaseRepository<AcademicField> repositoryAcademicFieldList)
        : base(repositoryAcademicFieldList) { }

    public override Expression<Func<AcademicField, GetAcademicFieldListViewModel>> Selector => z => new GetAcademicFieldListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<AcademicField>, IOrderedQueryable<AcademicField>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetAcademicFieldListViewModel>>> Handle(GetAcademicFieldListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}