using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateList;

public class GetSubDirectorateListHandler : GetAllHandler<SubDirectorates, GetSubDirectorateListViewModel, GetSubDirectorateListQuery>, IRequestHandler<GetSubDirectorateListQuery, Response<IEnumerable<GetSubDirectorateListViewModel>>>
{
    public GetSubDirectorateListHandler(IBaseRepository<SubDirectorates> repositorySubDirectorateList)
        : base(repositorySubDirectorateList) { }

    public override Expression<Func<SubDirectorates, GetSubDirectorateListViewModel>> Selector => z => new GetSubDirectorateListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<SubDirectorates>, IOrderedQueryable<SubDirectorates>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetSubDirectorateListViewModel>>> Handle(GetSubDirectorateListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}