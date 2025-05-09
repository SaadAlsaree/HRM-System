

namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Commands.AddMonthlyLeaveBalance;

public class AddMonthlyLeaveBalanceHandler : IRequestHandler<AddMonthlyLeaveBalanceCommand, bool>
{
    private readonly IBaseRepository<LeavesBalance> _leavesBalanceRepository;
    private readonly ILogger<AddMonthlyLeaveBalanceHandler> _logger;

    public AddMonthlyLeaveBalanceHandler(IBaseRepository<LeavesBalance> leavesBalanceRepository, ILogger<AddMonthlyLeaveBalanceHandler> logger)
    {
        _leavesBalanceRepository = leavesBalanceRepository ??
                throw new ArgumentNullException(nameof(leavesBalanceRepository));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public async Task<bool> Handle(AddMonthlyLeaveBalanceCommand request, CancellationToken cancellationToken)
    {
        try
        {
            // Get all active leave balances
            var leaveBalances = await _leavesBalanceRepository
                .GetAsync(balance => balance.StatusId == Status.Unverified);

            foreach (var balance in leaveBalances)
            {
                try
                {
                    // If balance is null, initialize it to 0 before adding
                    var newBalance = (int?)((balance.Balance ?? 0) + request.AmountToAdd);
                    var newNote = $"{request.Note} - {DateTime.Now:yyyy-MM-dd}";

                    // Create a dictionary of properties to update
                    var updateProps = new
                    {
                        Balance = newBalance,
                        Note = newNote
                    };

                    // Use the explicit update method with the balance ID
                    var updated = await _leavesBalanceRepository.UpdateEntity(
                        x => x.Id == balance.Id,
                        updateProps,
                        cancellationToken);

                    if (!updated)
                    {
                        _logger.LogWarning($"Failed to update balance for ID: {balance.Id}");
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error updating individual balance ID: {balance.Id}");
                }
            }

            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error adding monthly leave balance");
            return false;
        }
    }
}