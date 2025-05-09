namespace HRM.Hub.Application.Features.LeavesHandlers.Commands.CreateLeave;
using HRM.Hub.Domain.Common.Enums;

public class CreateLeaveCommandHandler : CreateHandler<Leaves, CreateLeaveCommand>, IRequestHandler<CreateLeaveCommand, Response<bool>>
{
    private readonly IBaseRepository<LeavesBalance> _leavesBalanceRepository;
    private readonly IBaseRepository<LogLeavesBalance> _logLeavesBalanceRepository;
    private readonly IBaseRepository<LeavesMedicalBalance> _leavesMedicalBalanceRepository;

    public CreateLeaveCommandHandler(
        IBaseRepository<Leaves> leavesRepository,
        IBaseRepository<LeavesBalance> leavesBalanceRepository,
        IBaseRepository<LogLeavesBalance> logLeavesBalanceRepository,
        IBaseRepository<LeavesMedicalBalance> leavesMedicalBalanceRepository)
        : base(leavesRepository)
    {
        _leavesBalanceRepository = leavesBalanceRepository ?? throw new ArgumentNullException(nameof(leavesBalanceRepository));
        _logLeavesBalanceRepository = logLeavesBalanceRepository ?? throw new ArgumentNullException(nameof(logLeavesBalanceRepository));
        _leavesMedicalBalanceRepository = leavesMedicalBalanceRepository ?? throw new ArgumentNullException(nameof(leavesMedicalBalanceRepository));
    }

    protected override Expression<Func<Leaves, bool>> ExistencePredicate(CreateLeaveCommand request) => _ => request == null;

    protected override Leaves MapToEntity(CreateLeaveCommand request)
    {
        return new Leaves
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            CountOfDays = request.CountOfDays,
            CountOfMinutes = request.CountOfMinutes,
            CountryId = request.CountryId,
            IsInside = request.IsInside,
            SalaryStatusId = request.SalaryStatusId,
            Note = request.Note,
            OrderNo = request.OrderNo,
            NormalLeaveTypeId = request.NormalLeaveTypeId,
            SicknessTypeId = request.SicknessTypeId,
            TypeOfLeaveId = request.TypeOfLeaveId,
            LongLeaveTypeId = request.LongLeaveTypeId,
            FromDate = request.FromDate,
            ToDate = request.ToDate,
            HireDate = request.HireDate,
            HireOrderDate = request.HireOrderDate,
            HireOrderNo = request.HireOrderNo,
            ReleaseDate = request.ReleaseDate,
            OrderDate = request.OrderDate,
            DateOfAssignment = request.DateOfAssignment,
            NoOfAssignment = request.NoOfAssignment,
            DateOfBirthCertificate = request.DateOfBirthCertificate,
            NoOfBirthCertificate = request.NoOfBirthCertificate,
            DateOfRelease = request.DateOfRelease,
            NoOfRelease = request.NoOfRelease,
            DateOfStart = request.DateOfStart,
            NoOfStart = request.NoOfStart,
            DateOfPermission = request.DateOfPermission,
            NoOfPermission = request.NoOfPermission,
        };
    }

    public async Task<Response<bool>> Handle(CreateLeaveCommand request, CancellationToken cancellationToken)
    {
        // Create the leave
        var result = await HandleBase(request, cancellationToken);
        if (!result.Succeeded)
            return result;

        // Update leave balance only if TypeOfLeaveId is not SpecialSicknessLeave, AppointeeLeave, or MourningLeave
        if (request.TypeOfLeaveId != LeaveTypes.SpecialSicknessLeave &&
            request.TypeOfLeaveId != LeaveTypes.AppointeeLeave &&
            request.TypeOfLeaveId != LeaveTypes.MourningLeave &&
            request.TypeOfLeaveId != LeaveTypes.MotherhoodBornLeave)
        {
            if (request.TypeOfLeaveId == LeaveTypes.SicknessLeave)
            {
                // Update medical leave balance for sickness leave
                var leavesMedicalBalance = await _leavesMedicalBalanceRepository.Find(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);
                if (leavesMedicalBalance != null)
                {
                    // Deduct the leave days from the medical balance
                    leavesMedicalBalance.Balance -= request.CountOfDays;
                    leavesMedicalBalance.Note = string.IsNullOrEmpty(leavesMedicalBalance.Note)
                        ? $"تم خصمه بسبب الإجازة المرضية: {request.Note}"
                        : $"{leavesMedicalBalance.Note}; تم خصمه بسبب الإجازة المرضية: {request.Note}";

                    _leavesMedicalBalanceRepository.Update(leavesMedicalBalance);
                }
            }
            else
            {
                // Update regular leave balance for non-medical leaves
                var leavesBalance = await _leavesBalanceRepository.Find(x => x.Id == request.EmployeeId, cancellationToken: cancellationToken);
                if (leavesBalance != null)
                {
                    // Deduct the leave days from the balance
                    leavesBalance.Balance -= request.CountOfDays;
                    leavesBalance.Note = string.IsNullOrEmpty(leavesBalance.Note)
                        ? $"تم خصمه بسبب الإجازة: {request.Note}"
                        : $"{leavesBalance.Note}; تم خصمه بسبب الإجازة: {request.Note}";

                    _leavesBalanceRepository.Update(leavesBalance);
                }
            }
        }

        return result;
    }
}