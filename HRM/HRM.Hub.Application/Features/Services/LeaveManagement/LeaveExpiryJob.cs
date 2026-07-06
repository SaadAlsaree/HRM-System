using HRM.Hub.Application.Contracts;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveExpiryJob
{
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly ILogger<LeaveExpiryJob> _logger;

    public LeaveExpiryJob(
        IServiceScopeFactory scopeFactory,
        ILogger<LeaveExpiryJob> logger)
    {
        _scopeFactory = scopeFactory;
        _logger = logger;
    }

    public async Task Execute()
    {
        var today = DateOnly.FromDateTime(DateTime.Now);

        List<Leaves> expiredLeaves;
        using (var scope = _scopeFactory.CreateScope())
        {
            var leavesRepository = scope.ServiceProvider.GetRequiredService<IBaseRepository<Leaves>>();
            expiredLeaves = await leavesRepository.Query(
                filter: x => x.LeaveStatusId == LeaveStatus.Active &&
                             !x.IsDeleted &&
                             x.ToDate.HasValue &&
                             x.ToDate.Value < today).ToListAsync();
        }

        if (expiredLeaves.Count == 0)
        {
            _logger.LogDebug("LeaveExpiryJob: no leaves to expire");
            return;
        }

        _logger.LogInformation("LeaveExpiryJob: expiring {Count} leaves", expiredLeaves.Count);

        foreach (var leave in expiredLeaves)
        {
            try
            {
                using var scope = _scopeFactory.CreateScope();
                var leaveManagementService = scope.ServiceProvider.GetRequiredService<ILeaveManagementService>();
                var returnRequest = new LeaveReturnRequest
                {
                    ReturnDate = leave.ToDate!.Value,
                    OrderNo = leave.OrderNo,
                    OrderDate = leave.OrderDate,
                    Remarks = "auto-expiry"
                };

                await leaveManagementService.ReturnAsync(leave.Id, returnRequest, null, CancellationToken.None);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "LeaveExpiryJob: failed to expire leave {LeaveId}", leave.Id);
            }
        }
    }
}
