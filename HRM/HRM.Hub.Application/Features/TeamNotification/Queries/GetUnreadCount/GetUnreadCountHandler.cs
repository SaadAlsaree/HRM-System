namespace HRM.Hub.Application.Features.TeamNotification.Queries.GetUnreadCount;

public class GetUnreadCountHandler : IRequestHandler<GetUnreadCountQuery, Response<int>>
{
    private readonly IBaseRepository<TeamNotifications> _repository;

    public GetUnreadCountHandler(IBaseRepository<TeamNotifications> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<int>> Handle(GetUnreadCountQuery request, CancellationToken cancellationToken)
    {
        var count = await _repository.CountAsync(
            x => x.EmployeeId == request.EmployeeId && !x.IsRead && !x.IsDeleted,
            cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(count);
    }
}
