using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveTypeList;

public class GetNormalLeaveTypeListHandler : GetAllHandler<NormalLeaveType, GetNormalLeaveTypeListViewModel, GetNormalLeaveTypeListQuery>, IRequestHandler<GetNormalLeaveTypeListQuery, Response<IEnumerable<GetNormalLeaveTypeListViewModel>>>
{
    public GetNormalLeaveTypeListHandler(IBaseRepository<NormalLeaveType> repositoryNormalLeaveTypeList)
        : base(repositoryNormalLeaveTypeList) { }

    public override Expression<Func<NormalLeaveType, GetNormalLeaveTypeListViewModel>> Selector => z => new GetNormalLeaveTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<NormalLeaveType>, IOrderedQueryable<NormalLeaveType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetNormalLeaveTypeListViewModel>>> Handle(GetNormalLeaveTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}