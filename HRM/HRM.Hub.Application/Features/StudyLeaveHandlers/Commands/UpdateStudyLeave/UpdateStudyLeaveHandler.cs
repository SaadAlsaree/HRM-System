namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.UpdateStudyLeave;

public class UpdateStudyLeaveHandler : IRequestHandler<UpdateStudyLeaveCommand, Response<bool>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public UpdateStudyLeaveHandler(
        IBaseRepository<StudyLeave> repositoryStudyLeave,
        IPromotionAllowanceCalculationService calculationService)
    {
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeave));
        _calculationService = calculationService;
    }

    public async Task<Response<bool>> Handle(UpdateStudyLeaveCommand request, CancellationToken cancellationToken)
    {
        var studyLeave = await _repositoryStudyLeave.Find(z => z.Id == request.StudyLeaveId, cancellationToken: cancellationToken);

        if (studyLeave == null)
            return ErrorsMessage.NotExistOnUpdate.ToErrorMessage(false);

        studyLeave.StudyFileId = request.StudyFileId;
        studyLeave.Notes = request.Notes;
        studyLeave.AcademicAchievementId = request.AcademicAchievementId;
        studyLeave.AcademicCertificateTypeId = request.AcademicCertificateTypeId;
        studyLeave.AcademicFieldId = request.AcademicFieldId;
        studyLeave.AcceptanceYear = request.AcceptanceYear;
        studyLeave.CountryId = request.CountryId;
        studyLeave.FinancialInsuranceDate = request.FinancialInsuranceDate;
        studyLeave.HireDate = request.HireDate;
        studyLeave.FinancialInsuranceNo = request.FinancialInsuranceNo;
        studyLeave.HireOrderNo = request.HireOrderNo;
        studyLeave.HireOrderDate = request.HireOrderDate;
        studyLeave.ReleaseDate = request.ReleaseDate;
        studyLeave.NameOfIssuingCertificate = request.NameOfIssuingCertificate;
        studyLeave.ReleaseOrderDate = request.ReleaseOrderDate;
        studyLeave.ReleaseOrderNo = request.ReleaseOrderNo;
        studyLeave.StudyStatusId = request.StudyStatusId;
        studyLeave.StudyResultId = request.StudyResultId;
        studyLeave.StudyPeriodTime = request.StudyPeriodTime;

        var updated = _repositoryStudyLeave.Update(studyLeave);
        if (!updated)
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        _ = await _calculationService.CalculateAsync(studyLeave.EmployeeId, "study-leave-updated", cancellationToken);
        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}
