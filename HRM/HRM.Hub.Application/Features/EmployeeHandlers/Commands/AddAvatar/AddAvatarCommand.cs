namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddAvatar;
public class AddAvatarCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public IFormFile File { get; set; }
    public Guid? CreateBy { get; set; }
}
