using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLawList;

public class GetLawListHandler : GetAllHandler<Laws, GetLawListViewModel, GetLawListQuery>, IRequestHandler<GetLawListQuery, Response<IEnumerable<GetLawListViewModel>>>
{
    public GetLawListHandler(IBaseRepository<Laws> repositoryLawList)
        : base(repositoryLawList) { }

    public override Expression<Func<Laws, GetLawListViewModel>> Selector => z => new GetLawListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Laws>, IOrderedQueryable<Laws>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetLawListViewModel>>> Handle(GetLawListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}