using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.PreciseAcademicFieldUtility.Queries.GetPreciseAcademicFieldList;

public class GetPreciseAcademicFieldListHandler : GetAllHandler<PreciseAcademicField, GetPreciseAcademicFieldListViewModel, GetPreciseAcademicFieldListQuery>, IRequestHandler<GetPreciseAcademicFieldListQuery, Response<IEnumerable<GetPreciseAcademicFieldListViewModel>>>
{
    public GetPreciseAcademicFieldListHandler(IBaseRepository<PreciseAcademicField> repositoryPreciseAcademicFieldList)
        : base(repositoryPreciseAcademicFieldList) { }

    public override Expression<Func<PreciseAcademicField, GetPreciseAcademicFieldListViewModel>> Selector => z => new GetPreciseAcademicFieldListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<PreciseAcademicField>, IOrderedQueryable<PreciseAcademicField>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetPreciseAcademicFieldListViewModel>>> Handle(GetPreciseAcademicFieldListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}