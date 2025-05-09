namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.GetChangeDueDate;
public class GetChangeDueDateHandler : GetAllWithCountHandler<ChangeDueDates, GetChangeDueDateViewModel,
GetChangeDueDateQuery>,
IRequestHandler<GetChangeDueDateQuery, Response<PagedResult<GetChangeDueDateViewModel>>>
{
    public GetChangeDueDateHandler(IBaseRepository<ChangeDueDates> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeDueDates, GetChangeDueDateViewModel>> Selector => x => new GetChangeDueDateViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        CurrentCategoryDueDate = x.CurrentDegreeDueDate,
        CurrentDegreeDueDate = x.CurrentDegreeDueDate,
        NewCategoryDueDate = x.NewDegreeDueDate,
        NewDegreeDueDate = x.NewDegreeDueDate,
        OrderDate = x.OrderDate,
        OrderNo = x.OrderNo,
        Note = x.Note,
        Status = x.StatusId
    };

    public override Func<IQueryable<ChangeDueDates>, IOrderedQueryable<ChangeDueDates>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetChangeDueDateViewModel>>> Handle(GetChangeDueDateQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}