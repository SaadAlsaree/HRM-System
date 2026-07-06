namespace HRM.Hub.Application.Features.Services.LeaveManagement;

public class LeaveBalanceService : ILeaveBalanceService
{
    private readonly IBaseRepository<LeavesBalance> _leavesBalanceRepository;
    private readonly IBaseRepository<LeavesMedicalBalance> _leavesMedicalBalanceRepository;
    private readonly IBaseRepository<TypeOfLeave> _typeOfLeaveRepository;

    public LeaveBalanceService(
        IBaseRepository<LeavesBalance> leavesBalanceRepository,
        IBaseRepository<LeavesMedicalBalance> leavesMedicalBalanceRepository,
        IBaseRepository<TypeOfLeave> typeOfLeaveRepository)
    {
        _leavesBalanceRepository = leavesBalanceRepository;
        _leavesMedicalBalanceRepository = leavesMedicalBalanceRepository;
        _typeOfLeaveRepository = typeOfLeaveRepository;
    }

    public async Task CommitAsync(Guid employeeId, int days, int typeOfLeaveId, string reason, CancellationToken ct)
    {
        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == typeOfLeaveId, cancellationToken: ct);
        if (typeOfLeave is { IsBalanceBased: false })
            return;

        if (typeOfLeave?.CountsTowardsAnnualBalance == false)
            return;

        var isMedical = typeOfLeaveId == (int)LeaveTypes.SicknessLeave ||
                        typeOfLeaveId == (int)LeaveTypes.SpecialSicknessLeave;

        if (isMedical)
        {
            var medicalBalance = await _leavesMedicalBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
            if (medicalBalance != null)
            {
                medicalBalance.Balance -= days;
                medicalBalance.Note = AppendNote(medicalBalance.Note, $"خصم بسبب الإجازة: {reason}");
                _leavesMedicalBalanceRepository.Update(medicalBalance);
            }
        }
        else
        {
            var balance = await _leavesBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
            if (balance != null)
            {
                balance.UsedBalance += days;
                balance.Balance = (balance.AnnualBalance + balance.CarriedOverBalance + balance.EarnedBalance) - balance.UsedBalance;
                balance.Note = AppendNote(balance.Note, $"خصم بسبب الإجازة: {reason}");
                _leavesBalanceRepository.Update(balance);
            }
        }
    }

    public async Task ReleaseAsync(Guid employeeId, int days, int typeOfLeaveId, string reason, CancellationToken ct)
    {
        var typeOfLeave = await _typeOfLeaveRepository.Find(x => x.Id == typeOfLeaveId, cancellationToken: ct);
        if (typeOfLeave is { IsBalanceBased: false })
            return;

        if (typeOfLeave?.CountsTowardsAnnualBalance == false)
            return;

        var isMedical = typeOfLeaveId == (int)LeaveTypes.SicknessLeave ||
                        typeOfLeaveId == (int)LeaveTypes.SpecialSicknessLeave;

        if (isMedical)
        {
            var medicalBalance = await _leavesMedicalBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
            if (medicalBalance != null)
            {
                medicalBalance.Balance += days;
                medicalBalance.Note = AppendNote(medicalBalance.Note, $"إضافة بسبب: {reason}");
                _leavesMedicalBalanceRepository.Update(medicalBalance);
            }
        }
        else
        {
            var balance = await _leavesBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
            if (balance != null)
            {
                balance.UsedBalance = Math.Max(0, balance.UsedBalance - days);
                balance.Balance = (balance.AnnualBalance + balance.CarriedOverBalance + balance.EarnedBalance) - balance.UsedBalance;
                balance.Note = AppendNote(balance.Note, $"إضافة بسبب: {reason}");
                _leavesBalanceRepository.Update(balance);
            }
        }
    }

    public async Task<LeavesBalance?> GetAsync(Guid employeeId, CancellationToken ct)
    {
        return await _leavesBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
    }

    public async Task RecomputeAsync(Guid employeeId, CancellationToken ct)
    {
        var balance = await _leavesBalanceRepository.Find(x => x.Id == employeeId, cancellationToken: ct);
        if (balance != null)
        {
            balance.Balance = (balance.AnnualBalance + balance.CarriedOverBalance + balance.EarnedBalance) - balance.UsedBalance;
            _leavesBalanceRepository.Update(balance);
        }
    }

    private static string AppendNote(string? existing, string addition) =>
        string.IsNullOrEmpty(existing) ? addition : $"{existing}; {addition}";
}
