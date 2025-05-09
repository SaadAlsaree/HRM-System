using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveList;

public class GetTypeOfLeaveListHandler : GetAllHandler<TypeOfLeave, GetTypeOfLeaveListViewModel, GetTypeOfLeaveListQuery>, IRequestHandler<GetTypeOfLeaveListQuery, Response<IEnumerable<GetTypeOfLeaveListViewModel>>>
{
    public GetTypeOfLeaveListHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeaveList)
        : base(repositoryTypeOfLeaveList) { }

    public override Expression<Func<TypeOfLeave, GetTypeOfLeaveListViewModel>> Selector => z => new GetTypeOfLeaveListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfLeave>, IOrderedQueryable<TypeOfLeave>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfLeaveListViewModel>>> Handle(GetTypeOfLeaveListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}