using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using System;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateEmployee;

public class UpdateEmployeeHandler :
        UpdateHandler<Employees, UpdateEmployeeCommand>,
        IRequestHandler<UpdateEmployeeCommand, Response<bool>>
{
    private readonly IBaseRepository<JobInformation> _repositoryJobInformation;
    private readonly IBaseRepository<ManagementInformation> _repositoryManagementInformation;
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IBaseRepository<EmployeePosition> _repositoryEmployeePosition;

    public UpdateEmployeeHandler(
        IBaseRepository<Employees> repositoryEmployees,
        IBaseRepository<JobInformation> repositoryJobInformation,
        IBaseRepository<ManagementInformation> repositoryManagementInformation,
        IBaseRepository<Promotion> repositoryPromotion,
        IBaseRepository<EmployeePosition> repositoryEmployeePosition)
        : base(repositoryEmployees)
    {
        _repositoryJobInformation = repositoryJobInformation ?? throw new ArgumentNullException(nameof(repositoryJobInformation));
        _repositoryManagementInformation = repositoryManagementInformation ?? throw new ArgumentNullException(nameof(repositoryManagementInformation));
        _repositoryPromotion = repositoryPromotion ?? throw new ArgumentNullException(nameof(repositoryPromotion));
        _repositoryEmployeePosition = repositoryEmployeePosition ?? throw new ArgumentNullException(nameof(repositoryEmployeePosition));
    }

    public override Expression<Func<Employees, bool>>
        EntityPredicate(UpdateEmployeeCommand request) =>
        x => x.Id == request.Id;

    public async Task<Response<bool>> Handle(UpdateEmployeeCommand request,
        CancellationToken cancellationToken)
    {
        request.FullName = $"{request.FirstName} {request.SecondName} {request.ThirdName} {request.FourthName} {request.SurName}".Trim();
        request.MotherFullName = $"{request.MotherFirstName} {request.MotherSecondName} {request.MotherThirdName} {request.MotherSurName}".Trim();

        if (!string.IsNullOrWhiteSpace(request.JobCode))
        {
            var byJobCode = await _repository.Find(
                z => z.JobCode == request.JobCode && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byJobCode != null)
                return ErrorsMessage.JobCodeExist.ToErrorMessage(false);
        }

        if (!string.IsNullOrWhiteSpace(request.StatisticalIndex))
        {
            var byStatistical = await _repository.Find(
                z => z.StatisticalIndex == request.StatisticalIndex && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byStatistical != null)
                return ErrorsMessage.StatisticalIndexExist.ToErrorMessage(false);
        }

        if (!string.IsNullOrWhiteSpace(request.LotNumber))
        {
            var byLot = await _repository.Find(
                z => z.LotNumber == request.LotNumber && z.Id != request.Id, cancellationToken: cancellationToken);
            if (byLot != null)
                return ErrorsMessage.LotNumberExist.ToErrorMessage(false);
        }

        var updateBaseResult = await HandleBase(request, cancellationToken);
        if (!updateBaseResult.Succeeded)
            return updateBaseResult;

        // 1. Update or Create JobInformation (تاريخ التعيين، نوع الوظيفة، الفحص الطبي، إلخ)
        var jobInfo = await _repositoryJobInformation.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (jobInfo == null)
        {
            await _repositoryJobInformation.Create(new JobInformation
            {
                Id = request.Id,
                HireDate = request.HireDate ?? default,
                TypeOfJobId = request.TypeOfJobId,
                MedicalTest = request.MedicalTest,
                IsBehaviorCode = request.IsBehaviorCode,
                IsMovedFromOutside = request.IsMovedFromOutside,
                IsReEmployed = request.IsReEmployed,
                IsStillWorking = request.IsStillWorking,
                EndOfServiceDate = request.EndOfServiceDate
            }, cancellationToken);
        }
        else
        {
            if (request.HireDate.HasValue && request.HireDate.Value != default)
                jobInfo.HireDate = request.HireDate.Value;
            if (request.TypeOfJobId.HasValue && request.TypeOfJobId.Value > 0)
                jobInfo.TypeOfJobId = request.TypeOfJobId.Value;
            if (request.MedicalTest.HasValue)
                jobInfo.MedicalTest = request.MedicalTest.Value;
            if (request.IsBehaviorCode.HasValue)
                jobInfo.IsBehaviorCode = request.IsBehaviorCode.Value;
            if (request.IsMovedFromOutside.HasValue)
                jobInfo.IsMovedFromOutside = request.IsMovedFromOutside.Value;
            if (request.IsReEmployed.HasValue)
                jobInfo.IsReEmployed = request.IsReEmployed.Value;
            if (request.IsStillWorking.HasValue)
                jobInfo.IsStillWorking = request.IsStillWorking.Value;
            if (request.EndOfServiceDate.HasValue)
                jobInfo.EndOfServiceDate = request.EndOfServiceDate.Value;

            _repositoryJobInformation.Update(jobInfo);
        }

        // 2. Update or Create ManagementInformation (منصب الموظف، الدائرة، المديرية، القسم، العنوان الوظيفي، الوصف الوظيفي)
        var managementInfo = await _repositoryManagementInformation.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (managementInfo == null)
        {
            await _repositoryManagementInformation.Create(new ManagementInformation
            {
                Id = request.Id,
                DirectorateId = request.DirectorateId ?? 0,
                SubDirectorateId = request.SubDirectorateId > 0 ? request.SubDirectorateId : null,
                DepartmentId = request.DepartmentId > 0 ? request.DepartmentId : null,
                PositionId = request.PositionId ?? 0,
                EmploymentDegreeId = request.EmploymentDegreeId ?? request.JobDegreeId ?? 0,
                JobTitleId = request.JobTitleId ?? 0,
                JobDescriptionId = request.JobDescriptionId ?? 0,
                StatusId = Status.Active,
                IsDeleted = false,
                IsCurrent = true,
                IsInHiring = true,
                Notes = request.Notes ?? "تعديل بيانات موظف"
            }, cancellationToken);
        }
        else
        {
            if (request.DirectorateId.HasValue && request.DirectorateId.Value > 0)
                managementInfo.DirectorateId = request.DirectorateId.Value;
            if (request.SubDirectorateId.HasValue)
                managementInfo.SubDirectorateId = request.SubDirectorateId.Value > 0 ? request.SubDirectorateId.Value : null;
            if (request.DepartmentId.HasValue)
                managementInfo.DepartmentId = request.DepartmentId.Value > 0 ? request.DepartmentId.Value : null;
            if (request.PositionId.HasValue && request.PositionId.Value > 0)
                managementInfo.PositionId = request.PositionId.Value;
            if (request.JobDegreeId.HasValue && request.JobDegreeId.Value > 0)
                managementInfo.EmploymentDegreeId = request.JobDegreeId.Value;
            else if (request.EmploymentDegreeId.HasValue && request.EmploymentDegreeId.Value > 0)
                managementInfo.EmploymentDegreeId = request.EmploymentDegreeId.Value;
            if (request.JobTitleId.HasValue && request.JobTitleId.Value > 0)
                managementInfo.JobTitleId = request.JobTitleId.Value;
            if (request.JobDescriptionId.HasValue && request.JobDescriptionId.Value > 0)
                managementInfo.JobDescriptionId = request.JobDescriptionId.Value;
            if (!string.IsNullOrWhiteSpace(request.Notes))
                managementInfo.Notes = request.Notes;

            _repositoryManagementInformation.Update(managementInfo);
        }

        // 3. Update or Create Promotion (الدرجة الوظيفية، الفئة الوظيفية)
        var promotion = await _repositoryPromotion.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);
        if (promotion == null)
        {
            if ((request.JobDegreeId.HasValue && request.JobDegreeId.Value > 0) ||
                (request.JobCategoryId.HasValue && request.JobCategoryId.Value > 0))
            {
                await _repositoryPromotion.Create(new Promotion
                {
                    Id = request.Id,
                    JobDegreeId = request.JobDegreeId ?? 0,
                    JobCategoryId = request.JobCategoryId ?? 0,
                    Note = request.Notes ?? string.Empty
                }, cancellationToken);
            }
        }
        else
        {
            if (request.JobDegreeId.HasValue && request.JobDegreeId.Value > 0)
                promotion.JobDegreeId = request.JobDegreeId.Value;
            if (request.JobCategoryId.HasValue && request.JobCategoryId.Value > 0)
                promotion.JobCategoryId = request.JobCategoryId.Value;
            if (!string.IsNullOrWhiteSpace(request.Notes))
                promotion.Note = request.Notes;

            _repositoryPromotion.Update(promotion);
        }

        // 4. Sync active EmployeePosition (if exists)
        var activePosition = await _repositoryEmployeePosition.Find(x =>
            x.EmployeeId == request.Id && x.Status == Status.Active && !x.IsDeleted, cancellationToken: cancellationToken);
        if (activePosition != null)
        {
            if (request.PositionId.HasValue && request.PositionId.Value > 0)
                activePosition.PositionId = request.PositionId.Value;
            if (request.DirectorateId.HasValue && request.DirectorateId.Value > 0)
                activePosition.DirectorateId = request.DirectorateId.Value;
            if (request.SubDirectorateId.HasValue)
                activePosition.SubDirectorateId = request.SubDirectorateId.Value > 0 ? request.SubDirectorateId.Value : null;
            if (request.DepartmentId.HasValue)
                activePosition.DepartmentId = request.DepartmentId.Value > 0 ? request.DepartmentId.Value : null;
            if (request.SectionId.HasValue)
                activePosition.SectionId = request.SectionId.Value > 0 ? request.SectionId.Value : null;
            if (request.UnitId.HasValue)
                activePosition.UnitId = request.UnitId.Value > 0 ? request.UnitId.Value : null;

            activePosition.LastUpdateBy = null;
            activePosition.LastUpdateAt = DateTime.Now;
            _repositoryEmployeePosition.Update(activePosition);
        }

        return SuccessMessage.Update.ToSuccessMessage(true);
    }
}