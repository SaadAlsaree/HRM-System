using HRM.Hub.Application.Contracts;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;

namespace HRM.Hub.Application.Features.AnnualAllowance.Commands.IssueAnnualAllowance;

public class IssueAnnualAllowanceHandler : IRequestHandler<IssueAnnualAllowanceCommand, Response<bool>>
{
    private readonly IBaseRepository<Employees> _employeeRepository;
    private readonly IBaseRepository<Promotion> _promotionRepository;
    private readonly IBaseRepository<AnnualAllowanceRecord> _recordRepository;
    private readonly IAnnualAllowanceCalculationService _calculationService;

    public IssueAnnualAllowanceHandler(
        IBaseRepository<Employees> employeeRepository,
        IBaseRepository<Promotion> promotionRepository,
        IBaseRepository<AnnualAllowanceRecord> recordRepository,
        IAnnualAllowanceCalculationService calculationService)
    {
        _employeeRepository = employeeRepository;
        _promotionRepository = promotionRepository;
        _recordRepository = recordRepository;
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(IssueAnnualAllowanceCommand request, CancellationToken cancellationToken)
    {
        var employee = await _employeeRepository.Query(x => x.Id == request.EmployeeId)
            .Include(x => x.Promotion)
            .Include(x => x.JobInformation)
            .FirstOrDefaultAsync(cancellationToken);

        if (employee?.Promotion == null || employee.JobInformation == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        // §4.11a: No bonus to retired/resigned/dismissed/deceased/interrupted/transferred/copied
        if (employee.StatusWorkingId == WorkingStatusEnum.Retired ||
            employee.StatusWorkingId == WorkingStatusEnum.Resigned ||
            employee.StatusWorkingId == WorkingStatusEnum.Dismissed ||
            employee.StatusWorkingId == WorkingStatusEnum.Deceased ||
            employee.StatusWorkingId == WorkingStatusEnum.Interrupted ||
            employee.StatusWorkingId == WorkingStatusEnum.Transferred ||
            employee.StatusWorkingId == WorkingStatusEnum.Copied)
            return Response<bool>.Fail(new MessageResponse { Message = "لا يمكن إصدار العلاوة للموظف بسبب حالة الخدمة", Code = "InvalidEmployeeStatus" });

        // Get latest calculation to determine due date
        var calc = await _calculationService.GetLatestDetailsAsync(request.EmployeeId, cancellationToken);
        if (calc == null)
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        // §4.11b: No bonus before completing entitlement period
        var today = DateOnly.FromDateTime(DateTime.Today);
        if (calc.FinalDueDate > today)
            return Response<bool>.Fail(new MessageResponse { Message = $"لا يمكن إصدار العلاوة قبل الموعد المحدد: {calc.FinalDueDate:yyyy-MM-dd}", Code = "NotYetEligible" });

        // §4.11c: Duplicate period check
        await _calculationService.ThrowIfDuplicateAsync(request.EmployeeId, calc.FinalDueDate, cancellationToken);

        // §4.11e: Data completeness already verified (Promotion + JobInfo check above)

        var record = new AnnualAllowanceRecord
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            DueDate = calc.FinalDueDate,
            ImplementationDate = null,
            BonusTypeId = request.BonusTypeId,
            ReasonForAmendment = request.ReasonForAmendment,
            AdministrativeOrderNo = string.IsNullOrEmpty(request.AdministrativeOrderNo) ? null : request.AdministrativeOrderNo,
            AdministrativeOrderDate = request.AdministrativeOrderDate,
            AnnualAllowanceStatus = AnnualAllowanceStatus.Draft,
            UserId = request.CreateBy ?? Guid.Empty,
            EnteredDate = DateTime.UtcNow,
            StatusId = Status.Active
        };

        await _recordRepository.Create(record, cancellationToken);

        // Advance LastAllowanceDate only when issued, not on draft
        // On draft, just keep as-is

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}