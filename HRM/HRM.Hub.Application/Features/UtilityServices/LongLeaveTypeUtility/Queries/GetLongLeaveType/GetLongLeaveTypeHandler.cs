
namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveType;
public class GetLongLeaveTypeHandler : GetAllWithCountHandler<LongLeaveType, GetLongLeaveTypeViewModel, GetLongLeaveTypeQuery>, IRequestHandler<GetLongLeaveTypeQuery, Response<PagedResult<GetLongLeaveTypeViewModel>>>
{
    public GetLongLeaveTypeHandler(IBaseRepository<LongLeaveType> repositoryLongLeaveType)
        : base(repositoryLongLeaveType) { }

    public override Expression<Func<LongLeaveType, GetLongLeaveTypeViewModel>> Selector => z => new GetLongLeaveTypeViewModel()
    {
        Id = z.Id,
        Name = z.Name,
        Status = z.StatusId,

    };

    public override Func<IQueryable<LongLeaveType>, IOrderedQueryable<LongLeaveType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetLongLeaveTypeViewModel>>> Handle(GetLongLeaveTypeQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
