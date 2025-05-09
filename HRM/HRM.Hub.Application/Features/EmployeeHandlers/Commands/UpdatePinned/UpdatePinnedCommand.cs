

namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdatePinned
{
    public class UpdatePinnedCommand : IRequest<Response<bool>>
    {
        public Guid EmployeeId { get; set; }
        public bool IsPinned { get; set; }
    }
}
