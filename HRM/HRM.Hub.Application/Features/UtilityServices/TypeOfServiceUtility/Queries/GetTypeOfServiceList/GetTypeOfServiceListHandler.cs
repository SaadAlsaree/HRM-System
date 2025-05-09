using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceList;

public class GetTypeOfServiceListHandler : GetAllHandler<TypeOfService, GetTypeOfServiceListViewModel, GetTypeOfServiceListQuery>, IRequestHandler<GetTypeOfServiceListQuery, Response<IEnumerable<GetTypeOfServiceListViewModel>>>
{
    public GetTypeOfServiceListHandler(IBaseRepository<TypeOfService> repositoryTypeOfServiceList)
        : base(repositoryTypeOfServiceList) { }

    public override Expression<Func<TypeOfService, GetTypeOfServiceListViewModel>> Selector => z => new GetTypeOfServiceListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfService>, IOrderedQueryable<TypeOfService>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfServiceListViewModel>>> Handle(GetTypeOfServiceListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}