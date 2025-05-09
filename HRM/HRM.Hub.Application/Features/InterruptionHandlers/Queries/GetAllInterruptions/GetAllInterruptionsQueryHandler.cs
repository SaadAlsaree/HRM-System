using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetAllInterruptions;
public class GetAllInterruptionsQueryHandler : GetAllWithCountHandler<Interruption, GetAllInterruptionsViewModel, GetAllInterruptionsQuery>,
    IRequestHandler<GetAllInterruptionsQuery, Response<PagedResult<GetAllInterruptionsViewModel>>>
{
    public GetAllInterruptionsQueryHandler(IBaseRepository<Interruption> interruptionRepository)
        : base(interruptionRepository)
    {
    }

    public override Expression<Func<Interruption, GetAllInterruptionsViewModel>> Selector => x
        => new GetAllInterruptionsViewModel
        {
            Id = x.Id,
            EmployeeId = x.EmployeeId,
            NotificationDate = x.NotificationDate,
            Reason = x.Reason,
            Note = x.Note,
            Status = x.StatusId,
            CreateAt = x.CreateAt,
            CreateBy = x.CreateBy,
            LastUpdateAt = x.LastUpdateAt,
            LastUpdateBy = x.LastUpdateBy,
            FullName = x.Employee.FullName,
            JobCode = x.Employee.JobCode,
            LotNumber = x.Employee.LotNumber,
        };

    public override Func<IQueryable<Interruption>, IOrderedQueryable<Interruption>> OrderBy => o
        => o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllInterruptionsViewModel>>> Handle(GetAllInterruptionsQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}