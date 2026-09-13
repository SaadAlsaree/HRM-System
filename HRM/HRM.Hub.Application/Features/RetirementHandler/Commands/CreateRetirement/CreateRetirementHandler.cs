using HRM.Hub.Application.Contracts;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace HRM.Hub.Application.Features.RetirementHandler.Commands.CreateRetirement
{
    public class CreateRetirementHandler :
        IRequestHandler<CreateRetirementCommend, Response<bool>>
    {
        private readonly IBaseRepository<Retirement> _repositoryRetirement;
        private readonly IBaseRepository<Employees> _repositoryEmployees;

        public CreateRetirementHandler(
            IBaseRepository<Retirement> repositoryRetirement,
            IBaseRepository<Employees> repositoryEmployees)
        {
            _repositoryRetirement = repositoryRetirement ?? throw new ArgumentNullException(nameof(repositoryRetirement));
            _repositoryEmployees = repositoryEmployees ?? throw new ArgumentNullException(nameof(repositoryEmployees));
        }

        public async Task<Response<bool>> Handle(CreateRetirementCommend request, CancellationToken cancellationToken)
        {
            if (request.EmployeeId == Guid.Empty)
                return ErrorsMessage.NotFoundData.ToErrorMessage(false);

            // Check if administrative order number is duplicated (only if non-empty)
            if (!string.IsNullOrWhiteSpace(request.AdministrativeOrderNo))
            {
                var exists = await _repositoryRetirement.Find(
                    x => x.AdministrativeOrderNo == request.AdministrativeOrderNo && !x.IsDeleted,
                    cancellationToken: cancellationToken);

                if (exists != null)
                    return ErrorsMessage.ExistOnCreate.ToErrorMessage(false);
            }

            // Fetch employee data to auto-fill any missing job / administrative info
            var employee = await _repositoryEmployees.Query(
                x => x.Id == request.EmployeeId,
                include: inc => inc
                    .Include(e => e.ManagementInformation)
                    .Include(e => e.Promotion)
                    .Include(e => e.JobInformation)
                    .Include(e => e.EducationInformation))
                .FirstOrDefaultAsync(cancellationToken);

            var entity = new Retirement
            {
                Id = Guid.NewGuid(),
                EmployeeId = request.EmployeeId,
                DirectorateId = (request.DirectorateId.HasValue && request.DirectorateId.Value > 0)
                    ? request.DirectorateId.Value
                    : (employee?.ManagementInformation?.DirectorateId > 0 ? employee.ManagementInformation.DirectorateId : null),
                SubDirectorateId = (request.SubDirectorateId.HasValue && request.SubDirectorateId.Value > 0)
                    ? request.SubDirectorateId.Value
                    : (employee?.ManagementInformation?.SubDirectorateId > 0 ? employee.ManagementInformation.SubDirectorateId : null),
                StartDate = request.StartDate ?? (employee?.JobInformation != null
                    ? employee.JobInformation.HireDate.ToDateTime(TimeOnly.MinValue)
                    : null),
                AcademicAchievementId = (request.AcademicAchievementId.HasValue && request.AcademicAchievementId.Value > 0)
                    ? request.AcademicAchievementId.Value
                    : (employee?.EducationInformation?.FirstOrDefault(a => a.IsCurrent && !a.IsDeleted)?.AcademicAchievementId
                       ?? employee?.EducationInformation?.FirstOrDefault(a => !a.IsDeleted)?.AcademicAchievementId),
                JobDegreeId = (request.JobDegreeId.HasValue && request.JobDegreeId.Value > 0)
                    ? request.JobDegreeId.Value
                    : (employee?.Promotion?.JobDegreeId > 0 ? employee.Promotion.JobDegreeId : null),
                JobCategoryId = (request.JobCategoryId.HasValue && request.JobCategoryId.Value > 0)
                    ? request.JobCategoryId.Value
                    : (employee?.Promotion?.JobCategoryId > 0 ? employee.Promotion.JobCategoryId : null),
                JobTitleId = (request.JobTitleId.HasValue && request.JobTitleId.Value > 0)
                    ? request.JobTitleId.Value
                    : (employee?.ManagementInformation?.JobTitleId > 0 ? employee.ManagementInformation.JobTitleId : null),
                DecisionToFixAge = request.DecisionToFixAge,
                EmployeePositionId = request.EmployeePositionId,
                EndDateOfService = request.EndDateOfService,
                Birthdate = request.Birthdate ?? (employee?.BirthDate.HasValue == true
                    ? employee.BirthDate.Value.ToDateTime(TimeOnly.MinValue)
                    : null),
                RetirementDate = request.RetirementDate.HasValue && request.RetirementDate.Value > 0
                    ? request.RetirementDate.Value
                    : 60,
                AdministrativeOrderNo = request.AdministrativeOrderNo,
                AdministrativeOrderDate = request.AdministrativeOrderDate ?? DateTime.Now,
                IsPoliticallyDismissed = request.IsPoliticallyDismissed,
                Note = request.Note,
                Status = Status.Active,
                StatusId = Status.Active,
                IsDeleted = false,
                CreateAt = DateTime.Now
            };

            var created = await _repositoryRetirement.Create(entity, cancellationToken);
            if (created == null)
                return ErrorsMessage.FailOnCreate.ToErrorMessage(false);

            return SuccessMessage.Create.ToSuccessMessage(true);
        }
    }
}