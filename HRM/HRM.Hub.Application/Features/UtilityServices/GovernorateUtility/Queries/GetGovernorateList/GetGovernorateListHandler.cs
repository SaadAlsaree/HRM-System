using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorateList;

public class GetGovernorateListHandler : GetAllHandler<Governorate, GetGovernorateListViewModel, GetGovernorateListQuery>, IRequestHandler<GetGovernorateListQuery, Response<IEnumerable<GetGovernorateListViewModel>>>
{
    public GetGovernorateListHandler(IBaseRepository<Governorate> repositoryGovernorateList)
        : base(repositoryGovernorateList) { }

    public override Expression<Func<Governorate, GetGovernorateListViewModel>> Selector => z => new GetGovernorateListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Governorate>, IOrderedQueryable<Governorate>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetGovernorateListViewModel>>> Handle(GetGovernorateListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}