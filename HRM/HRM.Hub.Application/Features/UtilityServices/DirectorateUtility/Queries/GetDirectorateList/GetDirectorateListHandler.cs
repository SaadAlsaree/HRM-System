using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorateList;

public class GetDirectorateListHandler: GetAllHandler<Directorates, GetDirectorateListViewModel, GetDirectorateListQuery>, IRequestHandler<GetDirectorateListQuery, Response<IEnumerable<GetDirectorateListViewModel>>>
{
    public GetDirectorateListHandler(IBaseRepository<Directorates> repositoryDirectorateList)
        : base(repositoryDirectorateList) { }

    public override Expression<Func<Directorates, GetDirectorateListViewModel>> Selector => z => new GetDirectorateListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Directorates>, IOrderedQueryable<Directorates>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetDirectorateListViewModel>>> Handle(GetDirectorateListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}