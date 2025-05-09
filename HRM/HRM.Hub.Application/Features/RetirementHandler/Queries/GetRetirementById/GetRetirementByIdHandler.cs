namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementById;

public class GetRetirementByIdHandler : IRequestHandler<GetRetirementByIdQuery,
    Response<GetRetirementByIdViewModel>>
{
    private readonly IBaseRepository<Retirement> _repositoryRetirement;

    public GetRetirementByIdHandler(IBaseRepository<Retirement> repositoryRetirement)
    {
        _repositoryRetirement = repositoryRetirement ??
                                         throw new ArgumentNullException(nameof(repositoryRetirement));
    }

    public async Task<Response<GetRetirementByIdViewModel>> Handle(GetRetirementByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryRetirement
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetRetirementByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = a.EmployeeId,
                DirectorateId = a.DirectorateId,
                SubDirectorateId = a.SubDirectorateId,
                StartDate = a.StartDate,
                AcademicAchievementId = a.AcademicAchievementId,
                JobDegreeId = a.JobDegreeId,
                JobCategoryId = a.JobCategoryId,
                JobTitleId = a.JobTitleId,
                DecisionToFixAge = a.DecisionToFixAge,
                EmployeePositionId = a.EmployeePositionId,
                EndDateOfService = a.EndDateOfService,
                Birthdate = a.Birthdate,
                RetirementDate = a.RetirementDate,
                AdministrativeOrderNo = a.AdministrativeOrderNo,
                AdministrativeOrderDate = a.AdministrativeOrderDate,
                IsPoliticallyDismissed = a.IsPoliticallyDismissed,
                Note = a.Note,
                Status = a.StatusId,
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber,
                StatisticalIndex = a.Employee.StatisticalIndex
                
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}