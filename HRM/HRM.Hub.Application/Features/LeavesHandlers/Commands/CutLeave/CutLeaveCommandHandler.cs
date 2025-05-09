namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CutLeave;
using HRM.Hub.Domain.Common.Enums;

public class CutLeaveCommandHandler : IRequestHandler<CutLeaveCommand, Response<bool>>
{
    private readonly IBaseRepository<Leaves> _leavesRepository;
    private readonly IBaseRepository<LeavesBalance> _leavesBalanceRepository;
    private readonly IBaseRepository<LogLeavesBalance> _logLeavesBalanceRepository;
    private readonly IBaseRepository<LeavesMedicalBalance> _leavesMedicalBalanceRepository;

    public CutLeaveCommandHandler(
        IBaseRepository<Leaves> leavesRepository,
        IBaseRepository<LeavesBalance> leavesBalanceRepository,
        IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository,
        IBaseRepository<LeavesMedicalBalance> leavesMedicalBalanceRepository)
    {
        _leavesRepository = leavesRepository ?? throw new ArgumentNullException(nameof(leavesRepository));
        _leavesBalanceRepository = leavesBalanceRepository ?? throw new ArgumentNullException(nameof(leavesBalanceRepository));
        _logLeavesBalanceRepository = logLeavesBalanceRepository ?? throw new ArgumentNullException(nameof(logLeavesBalanceRepository));
        _leavesMedicalBalanceRepository = leavesMedicalBalanceRepository ?? throw new ArgumentNullException(nameof(leavesMedicalBalanceRepository));
    }

    public async Task<Response<bool>> Handle(CutLeaveCommand request, CancellationToken cancellationToken)
    {
        // Find the leave to cut
        var leave = await _leavesRepository.Find(x => x.Id == request.LeaveId, cancellationToken: cancellationToken);
        if (leave == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<bool>(false);

        // Validate that the leave belongs to the specified employee
        var validator = new CutLeaveValidator();

        var validationResult = await validator.ValidateAsync(request, cancellationToken);

        if (validationResult.Errors.Count > 0)
            throw new Exceptions.ValidationException(validationResult);

        // Update the leave with the cut days
        var originalDays = leave.CountOfDays;
        leave.CountOfDays -= request.DaysToCut;
        leave.Note = string.IsNullOrEmpty(leave.Note)
            ? request.CutReason
            : $"{leave.Note};قطع : {request.CutReason}";
        leave.LastUpdateAt = DateTime.UtcNow;

        // Update the leave in the database
        _leavesRepository.Update(leave);

        // If balance adjustment is requested, update the leave balance
        if (request.AdjustBalance)
        {
            if (leave.TypeOfLeaveId == LeaveTypes.SicknessLeave)
            {
                // Find the employee's medical leave balance
                var leavesMedicalBalance = await _leavesMedicalBalanceRepository.Find(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);
                if (leavesMedicalBalance != null)
                {
                    // Add the cut days back to the medical balance
                    leavesMedicalBalance.Balance += request.DaysToCut;
                    leavesMedicalBalance.Note = string.IsNullOrEmpty(leavesMedicalBalance.Note)
                        ? $"تم تعديله بسبب قطع الإجازة المرضية: {request.CutReason}"
                        : $"{leavesMedicalBalance.Note}; تم تعديله بسبب قطع الإجازة المرضية: {request.CutReason}";

                    _leavesMedicalBalanceRepository.Update(leavesMedicalBalance);
                }
            }
            else
            {
                // Find the employee's regular leave balance
                var leavesBalance = await _leavesBalanceRepository.Find(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);
                if (leavesBalance != null)
                {
                    // Add the cut days back to the balance
                    leavesBalance.Balance += request.DaysToCut;
                    leavesBalance.Note = string.IsNullOrEmpty(leavesBalance.Note)
                        ? $"تم تعديله بسبب قطع الإجازة: {request.CutReason}"
                        : $"{leavesBalance.Note}; تم تعديله بسبب قطع الإجازة: {request.CutReason}";

                    _leavesBalanceRepository.Update(leavesBalance);
                }
            }
        }

        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}