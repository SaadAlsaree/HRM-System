using HRM.Hub.Application.Extensions;

namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveNotifcation;

public class GetStudyLeaveNotificationHandler : IRequestHandler<GetStudyLeaveNotificationQuery, Response<PagedResult<GetStudyLeaveNotificationViewModel>>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    public GetStudyLeaveNotificationHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeave));
    }

    public async Task<Response<PagedResult<GetStudyLeaveNotificationViewModel>>> Handle(GetStudyLeaveNotificationQuery request, CancellationToken cancellationToken)
    {
        var query = _repositoryStudyLeave.GetQueryable();

        query = query.Where(x => 
        x.HireDate.GetValueOrDefault() == default &&
        x.ReleaseDate.Value.AddMonths(x.StudyPeriodTime.Value) >= DateOnly.FromDateTime(DateTime.Now.AddMonths(-10)));

        var count= await query.CountAsync(cancellationToken: cancellationToken);

        var res = await query
            .Include(x => x.Employee)
           .ApplyPagination(request)
            .Select(x => new GetStudyLeaveNotificationViewModel()
            {
                EmployeeFullName = x.Employee.FullName,
                EmployeeId = x.EmployeeId,
                ReleaseOrderDate = x.ReleaseOrderDate,
                HireDate = x.HireDate,
                RemainingDays = (DateTime.Now.AddMonths(1) - x.ReleaseOrderDate.Value.AddMonths(x.StudyPeriodTime.Value).ToDateTime(TimeOnly.MaxValue)).Days,
                StudyPeriodTime = x.StudyPeriodTime,
            })
            .ToListAsync(cancellationToken: cancellationToken);


        var pagedResult = new PagedResult<GetStudyLeaveNotificationViewModel>
        {
            Items = res,
            TotalCount = count
        };

        return SuccessMessage.Get.ToSuccessMessage(pagedResult);
    }
}