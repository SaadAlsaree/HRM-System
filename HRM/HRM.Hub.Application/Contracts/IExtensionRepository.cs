using HRM.Hub.Application.Features.Services.Commands.ChangeStatus;

namespace HRM.Hub.Application.Contracts;
public interface IExtensionRepository<TId> : IDisposable
{

    Task<bool> DeleteRecordAsync(string tableName, TId primaryId);
    Task<bool> ChangeStatusRecordAsync(ChangeStatusCommand<TId> command);
}