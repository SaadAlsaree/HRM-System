using HRM.Hub.Application.Helper;
using MediatR;
using HRM.Hub.Domain.Common;

namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.AddMonthlyLeaveBalance;

public class AddMonthlyLeaveBalanceCommand : IRequest<bool>
{
    public int AmountToAdd { get; set; } = 3;
    public string Note { get; set; } = "تحديث الرصيد الشهري";
}