namespace HRM.Hub.Application.Features.TeamNotification.Queries.GetTeamNotifications;

public class GetTeamNotificationsHandler : IRequestHandler<GetTeamNotificationsQuery, Response<PagedResult<GetTeamNotificationsViewModel>>>
{
    private readonly IBaseRepository<TeamNotifications> _repository;

    public GetTeamNotificationsHandler(IBaseRepository<TeamNotifications> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<PagedResult<GetTeamNotificationsViewModel>>> Handle(GetTeamNotificationsQuery request, CancellationToken cancellationToken)
    {
        var query = _repository.Query(x => x.EmployeeId == request.EmployeeId && !x.IsDeleted);

        if (request.IsRead.HasValue)
            query = query.Where(x => x.IsRead == request.IsRead.Value);

        int totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderByDescending(x => x.CreateAt)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(x => new GetTeamNotificationsViewModel
            {
                Id = x.Id,
                TeamId = x.TeamId,
                EmployeeId = x.EmployeeId,
                Body = x.Body,
                Note = x.Note,
                IsRead = x.IsRead,
                NotificationDate = x.NotificationDate,
                Type = x.Type,
                CreatedAt = x.CreateAt
            })
            .ToListAsync(cancellationToken);

        var result = new PagedResult<GetTeamNotificationsViewModel>
        {
            Items = items,
            TotalCount = totalCount
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}
