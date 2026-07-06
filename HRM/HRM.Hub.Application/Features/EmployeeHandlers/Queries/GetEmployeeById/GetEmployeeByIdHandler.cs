namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployeeById;

using HRM.Hub.Application.Features.Services.ServiceDuration;

public class GetEmployeeByIdHandler : IRequestHandler<GetEmployeeByIdQuery, Response<GetEmployeeByIdViewModel>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly ServiceDurationService _serviceDurationService;

    public GetEmployeeByIdHandler(IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryEmployee = repositoryEmployee ?? throw new ArgumentNullException(nameof(repositoryEmployee));
        _serviceDurationService = new ServiceDurationService();
    }

    public async Task<Response<GetEmployeeByIdViewModel>> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
    {
        var employee = await _repositoryEmployee.Query(
            z => z.Id == request.Id,
            include: inc => inc
                .Include(z => z.ManagementInformation)
                .Include(z => z.JobInformation)
                .Include(z => z.Promotion)
                .Include(z => z.Country)
                .Include(z => z.ServiceCalculations)
                .Include(z => z.Interruptions))
            .AsNoTracking()
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        if (employee == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(new GetEmployeeByIdViewModel());

        var duration = _serviceDurationService.Compute(employee);

        var view = new GetEmployeeByIdViewModel
        {

            Id = employee.Id,
            JobCode = employee.JobCode,
            LotNumber = employee.LotNumber,
            FirstName = employee.FirstName,
            SecondName = employee.SecondName,
            ThirdName = employee.ThirdName,
            FourthName = employee.FourthName,
            SurName = employee.SurName,
            MotherFullName = employee.MotherFullName,
            MotherFirstName = employee.MotherFirstName,
            MotherSecondName = employee.MotherSecondName,
            MotherThirdName = employee.MotherThirdName,
            MotherSurName = employee.MotherSurName,
            GenderId = employee.Gender,
            BirthPlace = employee.BirthPlace,
            StatisticalIndex = employee.StatisticalIndex,
            BirthDate = employee.BirthDate,
            SocialStatus = employee.SocialStatus,
            Notes = employee.Notes,
            StatusWorkingId = employee.StatusWorkingId,
            Status = employee.StatusId,
            Nationalism = employee.Nationalism,
            Religion = employee.Religion,
            CountryId = employee.CountryId,
            CountryName = employee.Country?.Name,
            FullName = employee.FullName,
            TypeOfJobId = employee.JobInformation?.TypeOfJobId,
            IsPinned = employee.IsPinned,
            HireDate = employee.JobInformation?.HireDate,
            EndOfServiceDate = employee.JobInformation?.EndOfServiceDate,
            ServiceYears = duration.Years,
            ServiceMonths = duration.Months,
            ServiceDays = duration.Days,
            ServiceTotalDays = duration.TotalDays,
            ServiceDurationText = duration.ToString(),
            HasInterruption = employee.Interruptions != null && employee.Interruptions.Any(i => i.StartDate != null)
        };

        if (employee.ManagementInformation != null)
        {
            view.SubDirectorateId = employee.ManagementInformation.SubDirectorateId;
            view.JobTitleId = employee.ManagementInformation.JobTitleId;
            view.JobDescriptionId = employee.ManagementInformation.JobDescriptionId;
            view.DepartmentId = employee.ManagementInformation.DepartmentId;
            view.DirectorateId = employee.ManagementInformation.DirectorateId;
        }
        if (employee.Promotion != null)
        {
            view.JobDegreeId = employee.Promotion.JobDegreeId;
            view.JobCategoryId = employee.Promotion.JobCategoryId;
        }

        return SuccessMessage.Get.ToSuccessMessage<GetEmployeeByIdViewModel>(view);
    }

}
