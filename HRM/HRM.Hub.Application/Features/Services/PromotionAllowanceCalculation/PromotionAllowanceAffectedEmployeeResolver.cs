namespace HRM.Hub.Application.Features.Services.PromotionAllowanceCalculation;

public class PromotionAllowanceAffectedEmployeeResolver : IPromotionAllowanceAffectedEmployeeResolver
{
    private readonly IBaseRepository<ChangeDegrees> _changeDegreeRepository;
    private readonly IBaseRepository<EmployeeApplicableLaws> _applicableLawRepository;
    private readonly IBaseRepository<EmployeeDisciplinary> _disciplinaryRepository;
    private readonly IBaseRepository<Leaves> _leaveRepository;
    private readonly IBaseRepository<ServiceCalculation> _serviceCalculationRepository;
    private readonly IBaseRepository<StudyLeave> _studyLeaveRepository;
    private readonly IBaseRepository<ThanksAndSeniority> _thanksRepository;
    private readonly IBaseRepository<EducationInformation> _educationInformationRepository;
    private readonly IBaseRepository<Promotion> _promotionRepository;
    private readonly IBaseRepository<JobInformation> _jobInformationRepository;
    private readonly IBaseRepository<JobDegree> _jobDegreeRepository;
    private readonly IBaseRepository<JobCategory> _jobCategoryRepository;

    public PromotionAllowanceAffectedEmployeeResolver(
        IBaseRepository<ChangeDegrees> changeDegreeRepository,
        IBaseRepository<EmployeeApplicableLaws> applicableLawRepository,
        IBaseRepository<EmployeeDisciplinary> disciplinaryRepository,
        IBaseRepository<Leaves> leaveRepository,
        IBaseRepository<ServiceCalculation> serviceCalculationRepository,
        IBaseRepository<StudyLeave> studyLeaveRepository,
        IBaseRepository<ThanksAndSeniority> thanksRepository,
        IBaseRepository<EducationInformation> educationInformationRepository,
        IBaseRepository<Promotion> promotionRepository,
        IBaseRepository<JobInformation> jobInformationRepository,
        IBaseRepository<JobDegree> jobDegreeRepository,
        IBaseRepository<JobCategory> jobCategoryRepository)
    {
        _changeDegreeRepository = changeDegreeRepository;
        _applicableLawRepository = applicableLawRepository;
        _disciplinaryRepository = disciplinaryRepository;
        _leaveRepository = leaveRepository;
        _serviceCalculationRepository = serviceCalculationRepository;
        _studyLeaveRepository = studyLeaveRepository;
        _thanksRepository = thanksRepository;
        _educationInformationRepository = educationInformationRepository;
        _promotionRepository = promotionRepository;
        _jobInformationRepository = jobInformationRepository;
        _jobDegreeRepository = jobDegreeRepository;
        _jobCategoryRepository = jobCategoryRepository;
    }

    public async Task<Guid?> ResolveEmployeeIdAsync(TableNames tableName, Guid recordId, CancellationToken cancellationToken)
    {
        return tableName switch
        {
            TableNames.ChangeDegree => (await _changeDegreeRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.EmployeeApplicableLaws => (await _applicableLawRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.EmployeeDisciplinary => (await _disciplinaryRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.Leaves => (await _leaveRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.ServiceCalculation => (await _serviceCalculationRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.StudyLeave => (await _studyLeaveRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.ThanksAndSeniority => (await _thanksRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.EducationInformation => (await _educationInformationRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.EmployeeId,
            TableNames.Promotion => (await _promotionRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.Id,
            TableNames.JobInformation => (await _jobInformationRepository.Find(x => x.Id == recordId, cancellationToken: cancellationToken))?.Id,
            TableNames.JobDegree => null,
            TableNames.JobCategory => null,
            _ => null
        };
    }

    private async Task<Guid?> GetEmployeeIdByJobDegree(int jobDegreeId, CancellationToken cancellationToken)
    {
        var employee = await _promotionRepository.Query(x => x.JobDegreeId == jobDegreeId)
            .Select(x => x.Employee)
            .FirstOrDefaultAsync(cancellationToken);
        return employee?.Id;
    }

    private async Task<Guid?> GetEmployeeIdByJobCategory(int jobCategoryId, CancellationToken cancellationToken)
    {
        var employee = await _promotionRepository.Query(x => x.JobCategoryId == jobCategoryId)
            .Select(x => x.Employee)
            .FirstOrDefaultAsync(cancellationToken);
        return employee?.Id;
    }
}
