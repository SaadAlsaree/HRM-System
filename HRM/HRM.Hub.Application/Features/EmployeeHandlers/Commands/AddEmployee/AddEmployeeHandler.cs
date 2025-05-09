namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddEmployee;

public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommend, Response<bool>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;

    public AddEmployeeHandler(IBaseRepository<Employees> repositoryEmployee, IBaseRepository<ManagementInformation> repositoryManagementInformation)
    {
        _repositoryEmployee = repositoryEmployee;
        _repositoryManagementInformation = repositoryManagementInformation;
    }

    public async Task<Response<bool>> Handle(AddEmployeeCommend request, CancellationToken cancellationToken)
    {
        var employee = await _repositoryEmployee.Find(
            z =>
                 z.JobCode == request.JobCode, cancellationToken: cancellationToken);
        if (employee != null)
            return ErrorsMessage.ExistOnCreate.ToErrorMessage(false);

        var employeeData = new Employees()
        {
            Id = Guid.NewGuid(),
            BirthDate = request.BirthDate,
            BirthPlace = request.BirthPlace,
            FirstName = request.FirstName,
            SecondName = request.SecondName,
            ThirdName = request.ThirdName,
            FourthName = request.FourthName,
            SurName = request.SurName,
            MotherFirstName = request.MotherFirstName,
            MotherSecondName = request.MotherSecondName,
            MotherThirdName = request.MotherThirdName,
            MotherSurName = request.MotherSurName,
            MotherFullName =
                $"{request.MotherFirstName} {request.MotherSecondName} {request.MotherThirdName} {request.MotherSurName}"
                    .Trim(),
            FullName =
                $"{request.FirstName} {request.SecondName} {request.ThirdName} {request.FourthName} {request.SurName}"
                    .Trim(),
            WifeName = request.WifeName,
            ChildrenCount = request.ChildrenCount,
            Gender = request.GenderId,
            StatusWorkingId = request.StatusWorkingId,
            StatisticalIndex = request.StatisticalIndex,
            SocialStatus = request.SocialStatus,
            LotNumber = request.LotNumber,
            Notes = request.Notes,
            JobCode = request.JobCode,
            Nationalism = request.Nationalism,
            Religion = request.Religion,
            CountryId = request.CountryId,
            StatusId = Status.Unverified,
            JobInformation = new JobInformation()
            {
                EndOfServiceDate = default,
                AssignedId = default,
                HireDate = request.HireDate,
                IsBehaviorCode = request.IsBehaviorCode,
                IsMovedFromOutside = request.IsMovedFromOutside,
                IsReEmployed = request.IsReEmployed,
                IsStillWorking = request.IsStillWorking,
                MedicalTest = request.MedicalTest,
                TypeOfJobId = request.TypeOfJobId
            },
            Promotion = new Promotion()
            {
                JobCategoryId = request.JobCategoryId,
                JobDegreeId = request.JobDegreeId
            },
            LeavesBalances = new LeavesBalance()
            {
                Balance = 3,
                StatusId = Status.Unverified
            },
            LeavesMedicalBalances = new LeavesMedicalBalance()
            {
                Balance = 2.5,
                StatusId = Status.Unverified
            },

        };
        var result = await _repositoryEmployee.Create(employeeData, cancellationToken);
        var managementInformation = new ManagementInformation()
        {
            Id = employeeData.Id,
            DirectorateId = request.DirectorateId,
            SubDirectorateId = request.SubDirectorateId,
            DepartmentId = request.DepartmentId,
            PositionId = request.PositionId,
            EmploymentDegreeId = request.JobDegreeId,
            JobTitleId = request.JobTitleId,
            JobDescriptionId = request.JobDescriptionId,
            StatusId = Status.Unverified,
            IsDeleted = false,
            Notes = "تم اضافة موظف"
        };

        await _repositoryManagementInformation.Create(managementInformation, cancellationToken);

        result.ManagementInformation = managementInformation;
        _repositoryEmployee.Update(result);
        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}