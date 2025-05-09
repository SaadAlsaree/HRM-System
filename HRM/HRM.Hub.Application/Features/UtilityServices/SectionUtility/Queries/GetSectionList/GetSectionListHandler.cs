using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Queries.GetSectionList;

public class GetSectionListHandler : GetAllHandler<Sections, GetSectionListViewModel, GetSectionListQuery>, IRequestHandler<GetSectionListQuery, Response<IEnumerable<GetSectionListViewModel>>>
{
    public GetSectionListHandler(IBaseRepository<Sections> repositorySectionList)
        : base(repositorySectionList) { }

    public override Expression<Func<Sections, GetSectionListViewModel>> Selector => z => new GetSectionListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Sections>, IOrderedQueryable<Sections>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetSectionListViewModel>>> Handle(GetSectionListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}