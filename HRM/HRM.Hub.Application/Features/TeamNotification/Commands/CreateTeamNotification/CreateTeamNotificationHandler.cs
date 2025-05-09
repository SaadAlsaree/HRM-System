 namespace HRM.Hub.Application.Features.TeamNotification.Commands.CreateTeamNotification
{
    public class CreateTeamNotificationHandler : CreateHandler<TeamNotifications, CreateTeamNotificationCommand>,
    IRequestHandler<CreateTeamNotificationCommand, Response<bool>>
    {
        public CreateTeamNotificationHandler(IBaseRepository<TeamNotifications> repository) : base(repository)
        {
        }

        public async Task<Response<bool>> Handle(CreateTeamNotificationCommand request, CancellationToken cancellationToken)
         => await HandleBase(request, cancellationToken);


        protected override Expression<Func<TeamNotifications, bool>> ExistencePredicate(CreateTeamNotificationCommand request) => null;

        protected override TeamNotifications MapToEntity(CreateTeamNotificationCommand request)
        {
            return new TeamNotifications()
            {
                EmployeeId = request.EmployeeId,
                Body = request.Body,
                CreateAt = DateTime.Now,
                CreateBy = request.CreateBy,
                LastUpdateAt = DateTime.Now,
                LastUpdateBy = request.CreateBy,
                Note = request.Note,
                TeamId = request.TeamId
            };
        }
    }
}
