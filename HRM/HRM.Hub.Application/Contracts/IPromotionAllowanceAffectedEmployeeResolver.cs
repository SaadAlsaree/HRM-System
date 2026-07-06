namespace HRM.Hub.Application.Contracts;

public interface IPromotionAllowanceAffectedEmployeeResolver
{
    Task<Guid?> ResolveEmployeeIdAsync(TableNames tableName, Guid recordId, CancellationToken cancellationToken);
}
