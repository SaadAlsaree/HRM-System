namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateSocialStatus
{
    public class UpdateSocialStatusCommand : IRequest<Response<bool>>
    {
        public Guid EmployeeId { get; set; }
        public int SocialStatus { get; set; }
    }
}
