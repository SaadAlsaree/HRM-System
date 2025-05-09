using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Helper;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.Extensions.Logging;

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Commands.AddMonthlyLeaveMedicalBalance;

public class AddMonthlyLeaveMedicalBalanceHandler : IRequestHandler<AddMonthlyLeaveMedicalBalanceCommand, bool>
{
    private readonly IBaseRepository<LeavesMedicalBalance> _leavesMedicalBalanceRepository;
    private readonly ILogger<AddMonthlyLeaveMedicalBalanceHandler> _logger;

    public AddMonthlyLeaveMedicalBalanceHandler(IBaseRepository<LeavesMedicalBalance> leavesMedicalBalanceRepository, ILogger<AddMonthlyLeaveMedicalBalanceHandler> logger)
    {
        _leavesMedicalBalanceRepository = leavesMedicalBalanceRepository ??
                throw new ArgumentNullException(nameof(leavesMedicalBalanceRepository));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
    public async Task<bool> Handle(AddMonthlyLeaveMedicalBalanceCommand request, CancellationToken cancellationToken)
    {
        try
        {
            // Get all active leave balances
            var leaveBalances = await _leavesMedicalBalanceRepository
                .GetAsync(balance => balance.StatusId == Status.Unverified);

            foreach (var balance in leaveBalances)
            {
                try
                {
                    // If balance is null, initialize it to 0 before adding
                    var newBalance = (double?)((balance.Balance ?? 0) + request.AmountToAdd);
                    var newNote = $"{request.Note} - {DateTime.Now:yyyy-MM-dd}";

                    // Create a dictionary of properties to update
                    var updateProps = new
                    {
                        Balance = newBalance,
                        Note = newNote
                    };

                    // Use the explicit update method with the balance ID
                    var updated = await _leavesMedicalBalanceRepository.UpdateEntity(
                        x => x.Id == balance.Id,
                        updateProps,
                        cancellationToken);

                    if (!updated)
                    {
                        _logger.LogWarning($"Failed to update medical balance for ID: {balance.Id}");
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error updating individual medical balance ID: {balance.Id}");
                }
            }

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error adding monthly leave medical balance");
            return false;
        }
    }
}
