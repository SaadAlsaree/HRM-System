namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.GetByIdChangeDueDate;

public class GetByIdChangeDueDateHandler : GetByIdHandler<ChangeDueDates,
GetByIdChangeDueDateViewModel, GetByIdChangeDueDateQuery>,
    IRequestHandler<GetByIdChangeDueDateQuery, Response<GetByIdChangeDueDateViewModel>>
{
    public GetByIdChangeDueDateHandler(IBaseRepository<ChangeDueDates> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeDueDates, GetByIdChangeDueDateViewModel>>
        Selector => x => new GetByIdChangeDueDateViewModel()
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

    public async Task<Response<GetByIdChangeDueDateViewModel>>
        Handle(GetByIdChangeDueDateQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);

    public override Expression<Func<ChangeDueDates, bool>>
    IdPredicate(GetByIdChangeDueDateQuery request) => x => x.Id == request.Id;
}