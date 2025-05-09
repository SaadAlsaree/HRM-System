

using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.UpdateLeavesMedicalBalance
{
    public class UpdateLeavesMedicalBalanceCommand : IRequest<Response<bool>>
    {
        [SwaggerIgnore]
        public Guid Id { get; set; }
        public double? Balance { get; set; }

        public string Note { get; set; }
    }
}
