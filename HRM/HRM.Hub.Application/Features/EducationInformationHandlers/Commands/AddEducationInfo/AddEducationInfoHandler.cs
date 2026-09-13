using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;
using HRM.Hub.Domain.Entities;
using NPOI.SS.Formula.Functions;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.AddEducationInfo;
public class AddEducationInfoHandler : CreateHandler<EducationInformation, AddEducationInfoCommand>, IRequestHandler<AddEducationInfoCommand, Response<bool>>
{
    private readonly IBaseRepository<EducationInformation> _repositoryApplicableLaws;
    private readonly IPromotionAllowanceCalculationService _calculationService;
    private Guid _createdId;

    public AddEducationInfoHandler(
        IBaseRepository<EducationInformation> repositoryApplicableLaws,
        IPromotionAllowanceCalculationService calculationService)
        : base(repositoryApplicableLaws)
    {
        _repositoryApplicableLaws = repositoryApplicableLaws;
        _calculationService = calculationService;
    }
    // An employee can hold several certificates; only the same certificate (same achievement and
    // document number) counts as a duplicate.
    protected override Expression<Func<EducationInformation, bool>> ExistencePredicate(AddEducationInfoCommand request) =>
        z => z.EmployeeId == request.EmployeeId
             && z.AcademicAchievementId == request.AcademicAchievementId
             && z.DocumentNo == request.DocumentNo;

    
    private async Task ChangeStatusToOld(Guid employeeId, Guid newCurrentId, CancellationToken cancellationToken)
    {
        // get all old current
        var oldEducationInfo = await _repositoryApplicableLaws
            .Query(x => x.EmployeeId == employeeId && x.Id != newCurrentId && x.IsCurrent)
            .ToListAsync(cancellationToken: cancellationToken);

        if (oldEducationInfo.Count > 0)
        {
            // change IsCurrent value and type of old current
            foreach (var position in oldEducationInfo)
            {
                position.IsCurrent = false;
            }

            await _repositoryApplicableLaws.UpdateRange(oldEducationInfo,
                cancellationToken: cancellationToken);
        }
    }
    
    protected override EducationInformation MapToEntity(AddEducationInfoCommand request)
    {
        _createdId = Guid.NewGuid();
        return new EducationInformation
        {
            Id = _createdId,
            EmployeeId = request.EmployeeId,
            OriginalDocument = request.OriginalDocument,
            DocumentNo = request.DocumentNo,
            DocumentDate = request.DocumentDate,
            DocumentSender = request.DocumentSender,
            DocumentSendDate = request.DocumentSendDate,
            AcademicAchievementId = request.AcademicAchievementId,
            AcademicFieldId = request.AcademicFieldId,
            PreciseAcademicFieldId = request.PreciseAcademicFieldId,
            NameOfIssuingCertificate = request.NameOfIssuingCertificate,
            StartDate = request.StartDate,
            EndDate = request.EndDate,
            GraduationYear = request.GraduationYear,
            IsDuringRecruitment = request.IsDuringRecruitment,
            IsDocumentVerify = request.IsDocumentVerify,
            CountryId = request.CountryId,
            StudyTypeId = request.StudyTypeId,
            Notes = request.Notes,
            IsInHiring = request.IsInHiring,
            IsCurrent = true,
            
};
    }

    public async Task<Response<bool>> Handle(AddEducationInfoCommand request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (!result.Succeeded)
            return result;

        // The new certificate becomes the current one; demote the others only after it was saved,
        // so a rejected insert no longer leaves the employee without a current certificate.
        await ChangeStatusToOld(request.EmployeeId, _createdId, cancellationToken);

        // The academic achievement selects the promotion/allowance rule, so recalculate.
        _ = await _calculationService.CalculateAsync(request.EmployeeId, "education-information-created", cancellationToken);

        return result;
    }

    
}