namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWoundedById;

public class GetMartyrsAndWoundedByIdHandler : IRequestHandler<GetMartyrsAndWoundedByIdQuery,
    Response<GetMartyrsAndWoundedByIdViewModel>>
{
    private readonly IBaseRepository<MartyrsAndWounded> _repositoryMartyrsAndWounded;

    public GetMartyrsAndWoundedByIdHandler(IBaseRepository<MartyrsAndWounded> repositoryMartyrsAndWounded)
    {
        _repositoryMartyrsAndWounded = repositoryMartyrsAndWounded ??
                                         throw new ArgumentNullException(nameof(repositoryMartyrsAndWounded));
    }

    public async Task<Response<GetMartyrsAndWoundedByIdViewModel>> Handle(GetMartyrsAndWoundedByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryMartyrsAndWounded
            .Query(x => x.Id == request.Id)
            .Select(z => new GetMartyrsAndWoundedByIdViewModel()
            {
                Id = z.Id,
                EmployeeId = z.EmployeeId,
                DirectorateId = z.Employee.ManagementInformation.DirectorateId,
                DirectorateName = z.Employee.ManagementInformation.Directorate.Name,
                SubDirectorateId = z.Employee.ManagementInformation.SubDirectorateId,
                SubDirectorateName = z.Employee.ManagementInformation.SubDirectorate.Name,
                StartDate = z.Employee.ManagementInformation.Employee.JobInformation.HireDate,
                JobDegreeId = z.Employee.Promotion.JobDegreeId,
                JobDegreeName = z.Employee.Promotion.JobDegree.Name,
                JobCategoryId = z.Employee.Promotion.JobCategoryId,
                JobCategoryName = z.Employee.Promotion.JobCategory.Name,
                JobTitleId = z.Employee.ManagementInformation.JobTitleId,
                JobTitleName = z.Employee.ManagementInformation.JobTitle.Name,
                EmployeePositionId = z.Employee.ManagementInformation.PositionId,
                EmployeePositionName = z.Employee.ManagementInformation.Position.Name,
                EndDateOfService = z.EndDateOfService,
                Birthdate = z.Employee.BirthDate,
                RetirementDate = z.RetirementDate,
                AdministrativeOrderNo = z.AdministrativeOrderNo,
                AdministrativeOrderDate = z.AdministrativeOrderDate,
                IsPoliticallyDismissed = z.IsPoliticallyDismissed,
                DateOfMartyrdom = z.DateOfMartyrdom,
                Note = z.Note,
                Status = z.StatusId,
                FullName = z.Employee.FullName,
                JobCode = z.Employee.JobCode,
                LotNumber = z.Employee.LotNumber,
                MotherFullName = z.Employee.MotherFullName,
                GenderName = z.Employee.Gender.GetDisplayName(),
                HireDate = z.Employee.JobInformation.HireDate,
                DateOfDeath = z.DateOfDeath,
                HealthStatus = z.HealthStatus.GetDisplayName(),
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}