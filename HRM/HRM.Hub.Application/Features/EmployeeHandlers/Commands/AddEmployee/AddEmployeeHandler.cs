namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.AddEmployee;

public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommend, Response<bool>>
{
    private readonly IBaseRepository<Employees> _repositoryEmployee;

    public AddEmployeeHandler(IBaseRepository<Employees> repositoryEmployee)
    {
        _repositoryEmployee = repositoryEmployee;
    }

    public async Task<Response<bool>> Handle(AddEmployeeCommend request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.JobCode))
            return ErrorsMessage.FailOnCreate.ToErrorMessage(false);
        var employee = await _repositoryEmployee.Find(
            z =>
                 z.JobCode == request.JobCode, cancellationToken: cancellationToken);
        if (employee != null)
            return ErrorsMessage.JobCodeExist.ToErrorMessage(false);

        if (!string.IsNullOrWhiteSpace(request.StatisticalIndex))
        {
            var byStatistical = await _repositoryEmployee.Find(
                z => z.StatisticalIndex == request.StatisticalIndex, cancellationToken: cancellationToken);
            if (byStatistical != null)
                return ErrorsMessage.StatisticalIndexExist.ToErrorMessage(false);
        }

        if (!string.IsNullOrWhiteSpace(request.LotNumber))
        {
            var byLot = await _repositoryEmployee.Find(
                z => z.LotNumber == request.LotNumber, cancellationToken: cancellationToken);
            if (byLot != null)
                return ErrorsMessage.LotNumberExist.ToErrorMessage(false);
        }

        // ManagementInformation shares the same PK as the Employee (one-to-one).
        // Attaching it as a navigation property below lets EF Core persist the Employee
        // together with all related entities (JobInformation, Promotion, ManagementInformation,
        // LeavesBalances) in a SINGLE SaveChanges call, so the write is atomic: either all
        // job-related data is saved or none of it is. Previously ManagementInformation was
        // created in a separate SaveChanges, which caused a partial (silent) save whenever it
        // failed — leaving the Employee without its job title/description/position.
        var employeeId = Guid.NewGuid();

        var employeeData = new Employees()
        {
            Id = employeeId,
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
            ManagementInformation = new ManagementInformation()
            {
                Id = employeeId,
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

        try
        {
            await _repositoryEmployee.Create(employeeData, cancellationToken);
        }
        catch
        {
            // SaveChanges failed (e.g. an invalid/missing required foreign key such as
            // JobTitleId/JobDegreeId). Because everything is written in a single SaveChanges,
            // nothing is persisted here — no partial employee record is left behind.
            // The validator (AddEmployeeCommendValidator) should normally prevent this path.
            return Response<bool>.Fail(new MessageResponse
            {
                Message = "تعذر حفظ البيانات الوظيفية، يرجى التأكد من اختيار الدرجة والفئة والعنوان الوظيفي والمنصب",
                Code = "FailOnCreate"
            });
        }

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}