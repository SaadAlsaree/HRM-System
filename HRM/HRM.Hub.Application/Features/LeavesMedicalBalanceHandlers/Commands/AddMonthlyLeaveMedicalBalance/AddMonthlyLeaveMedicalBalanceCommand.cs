using MediatR;

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.AddMonthlyLeaveMedicalBalance
{
    public class AddMonthlyLeaveMedicalBalanceCommand : IRequest<bool>
    {
        public double AmountToAdd { get; set; } = 2.5;
        public string Note { get; set; } = "تحديث الرصيد الشهري";
    }
}
