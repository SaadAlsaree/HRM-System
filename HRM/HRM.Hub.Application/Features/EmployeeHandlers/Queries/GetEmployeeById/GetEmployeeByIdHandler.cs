namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployeeById;

public class GetEmployeeByIdHandler : IRequestHandler<GetEmployeeByIdQuery, Response<GetEmployeeByIdViewModel>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    public GetEmployeeByIdHandler(IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryEmployee = repositoryEmployee ?? throw new ArgumentNullException(nameof(repositoryEmployee));
    }

    public async Task<Response<GetEmployeeByIdViewModel>> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
    {
        var employee = await _repositoryEmployee.Query(z => z.Id == request.Id, include: inc => inc.Include(z => z.ManagementInformation)).Select(z => new GetEmployeeByIdViewModel()
        {

            Id = z.Id,
            JobCode = z.JobCode,
            LotNumber = z.LotNumber,
            FirstName = z.FirstName,
            SecondName = z.SecondName,
            ThirdName = z.ThirdName,
            FourthName = z.FourthName,
            SurName = z.SurName,
            MotherFullName = z.MotherFullName,
            MotherFirstName = z.MotherFirstName,
            MotherSecondName = z.MotherSecondName,
            MotherThirdName = z.MotherThirdName,
            MotherSurName = z.MotherSurName,
            GenderId = z.Gender,
            BirthPlace = z.BirthPlace,
            StatisticalIndex = z.StatisticalIndex,
            BirthDate = z.BirthDate,
            SocialStatus = z.SocialStatus,
            Notes = z.Notes,
            StatusWorkingId = z.StatusWorkingId,
            Status = z.StatusId,
            Nationalism = z.Nationalism,
            Religion = z.Religion,
            CountryId = z.CountryId,
            CountryName = z.Country.Name,
            SubDirectorateId = z.ManagementInformation.SubDirectorateId,
            JobTitleId = z.ManagementInformation.JobTitleId,
            JobDegreeId = z.Promotion.JobDegreeId,
            JobDescriptionId = z.ManagementInformation.JobDescriptionId,
            JobCategoryId = z.Promotion.JobCategoryId,
            DepartmentId = z.ManagementInformation.DepartmentId,
            DirectorateId = z.ManagementInformation.DirectorateId,
            FullName = z.FullName,
            TypeOfJobId = z.JobInformation.TypeOfJobId,
            IsPinned = z.IsPinned,
            WifeName = z.WifeName,
            ChildrenCount = z.ChildrenCount
        }).FirstOrDefaultAsync(cancellationToken: cancellationToken);

        if (employee == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(new GetEmployeeByIdViewModel());
        return SuccessMessage.Get.ToSuccessMessage<GetEmployeeByIdViewModel>(employee);
    }

}
