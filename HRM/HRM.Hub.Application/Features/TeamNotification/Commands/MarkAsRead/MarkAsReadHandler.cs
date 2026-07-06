namespace HRM.Hub.Application.Features.TeamNotification.Commands.MarkAsRead;

public class MarkAsReadHandler : IRequestHandler<MarkAsReadCommand, Response<bool>>
{
    private readonly IBaseRepository<TeamNotifications> _repository;

    public MarkAsReadHandler(IBaseRepository<TeamNotifications> repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public async Task<Response<bool>> Handle(MarkAsReadCommand request, CancellationToken cancellationToken)
    {
        var entity = await _repository.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

        if (entity == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        entity.IsRead = true;
        entity.LastUpdateBy = request.LastUpdateBy;
        entity.LastUpdateAt = DateTime.Now;

        var resp = await _repository.UpdateEntity(x => x.Id == request.Id, entity, cancellationToken);

        return resp ? SuccessMessage.Update.ToSuccessMessage(true) : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
    }
}
