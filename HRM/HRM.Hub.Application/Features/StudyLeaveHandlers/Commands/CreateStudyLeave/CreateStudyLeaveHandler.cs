namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Commands.CreateStudyLeave;

public class CreateStudyLeaveHandler : IRequestHandler<CreateStudyLeaveCommand, Response<bool>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    public CreateStudyLeaveHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeave));
    }
    public async Task<Response<bool>> Handle(CreateStudyLeaveCommand request, CancellationToken cancellationToken)
    {
        var checkExist = await _repositoryStudyLeave.Find(x => x.EmployeeId == request.EmployeeId && x.StatusId != Status.InActive && x.StudyFileId == request.StudyFileId, cancellationToken: cancellationToken);
        if (checkExist != null)
            return ErrorsMessage.ExistOnCreate.ToErrorMessage<bool>(false);

        var studyLeave = new StudyLeave()
        {
            Id = Guid.NewGuid(),
            StudyFileId = request.StudyFileId,
            Notes = request.Notes,
            EmployeeId = request.EmployeeId,
            AcademicAchievementId = request.AcademicAchievementId,
            AcademicCertificateTypeId = request.AcademicCertificateTypeId,
            AcademicFieldId = request.AcademicFieldId,
            AcceptanceYear = request.AcceptanceYear,
            CountryId = request.CountryId,
            FinancialInsuranceDate = request.FinancialInsuranceDate,
            HireDate = request.HireDate,
            FinancialInsuranceNo = request.FinancialInsuranceNo,
            HireOrderDate = request.HireOrderDate,
            HireOrderNo = request.HireOrderNo,
            ReleaseDate = request.ReleaseDate,
            NameOfIssuingCertificate = request.NameOfIssuingCertificate,
            ReleaseOrderDate = request.ReleaseOrderDate,
            ReleaseOrderNo = request.ReleaseOrderNo,
            StudyStatusId = request.StudyStatusId,
            StudyResultId = request.StudyResultId,
            StudyPeriodTime = request.StudyPeriodTime,
        };

        await _repositoryStudyLeave.Create(studyLeave, cancellationToken);

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}