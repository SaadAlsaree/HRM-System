using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessTypeList;

public class GetSicknessTypeListHandler : GetAllHandler<SicknessType, GetSicknessTypeListViewModel, GetSicknessTypeListQuery>, IRequestHandler<GetSicknessTypeListQuery, Response<IEnumerable<GetSicknessTypeListViewModel>>>
{
    public GetSicknessTypeListHandler(IBaseRepository<SicknessType> repositorySicknessTypeList)
        : base(repositorySicknessTypeList) { }

    public override Expression<Func<SicknessType, GetSicknessTypeListViewModel>> Selector => z => new GetSicknessTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<SicknessType>, IOrderedQueryable<SicknessType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetSicknessTypeListViewModel>>> Handle(GetSicknessTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}