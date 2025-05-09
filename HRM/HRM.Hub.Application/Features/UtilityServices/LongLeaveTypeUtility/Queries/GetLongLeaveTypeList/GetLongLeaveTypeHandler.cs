namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveTypeList;

public class GetLongLeaveTypeListHandler : GetAllHandler<LongLeaveType, GetLongLeaveTypeListViewModel, GetLongLeaveTypeListQuery>, IRequestHandler<GetLongLeaveTypeListQuery, Response<IEnumerable<GetLongLeaveTypeListViewModel>>>
{
    public GetLongLeaveTypeListHandler(IBaseRepository<LongLeaveType> repositoryLongLeaveTypeList)
        : base(repositoryLongLeaveTypeList) { }

    public override Expression<Func<LongLeaveType, GetLongLeaveTypeListViewModel>> Selector => z => new GetLongLeaveTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<LongLeaveType>, IOrderedQueryable<LongLeaveType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetLongLeaveTypeListViewModel>>> Handle(GetLongLeaveTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}