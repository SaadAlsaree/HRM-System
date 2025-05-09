using HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;
using HRM.Hub.Application.Features.UtilityServices.AcademicAchievementUtility.Commands.CreateAcademicAchievement;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;
using HRM.Hub.Domain.Entities;
using NPOI.SS.Formula.Functions;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Commands.AddEducationInfo;
public class AddEducationInfoHandler : CreateHandler<EducationInformation, AddEducationInfoCommand>, IRequestHandler<AddEducationInfoCommand, Response<bool>>
{
    private readonly IBaseRepository<EducationInformation> _repositoryApplicableLaws;

    public AddEducationInfoHandler(IBaseRepository<EducationInformation> repositoryApplicableLaws)
        : base(repositoryApplicableLaws)
    {
        _repositoryApplicableLaws = repositoryApplicableLaws;
    }
    protected override Expression<Func<EducationInformation, bool>> ExistencePredicate(AddEducationInfoCommand request) => z => z.EmployeeId == request.EmployeeId;

    
    private async Task ChangeStatusToOld(AddEducationInfoCommand request, CancellationToken cancellationToken)
    {
        // get all old current
        var oldEducationInfo = await _repositoryApplicableLaws
            .Query(x => x.EmployeeId == request.EmployeeId)
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
        return new EducationInformation
        {
            Id = Guid.NewGuid(),
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
        await ChangeStatusToOld(request, cancellationToken);
        return await HandleBase(request, cancellationToken);
    }

    
}