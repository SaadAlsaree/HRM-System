using HRM.Hub.Application.Helper;
using HRM.Hub.Domain.Common.Enums;
using MediatR;
using System;

namespace HRM.Hub.Application.Features.EmployeeHandlers.Commands.UpdateEmployee;

public class UpdateEmployeeCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public string StatisticalIndex { get; set; }
    public string JobCode { get; set; }
    public string LotNumber { get; set; }
    public string FirstName { get; set; }
    public string SecondName { get; set; }
    public string ThirdName { get; set; }
    public string FourthName { get; set; }
    public string SurName { get; set; }
    public string MotherFirstName { get; set; }
    public string MotherSecondName { get; set; }
    public string MotherThirdName { get; set; }
    public string MotherSurName { get; set; }
    public string WifeName { get; set; }
    public int ChildrenCount { get; set; }
    public int GenderId { get; set; }
    [SwaggerIgnore]
    public GenderEnum Gender { get => (GenderEnum)GenderId; set => GenderId = (int)value; }
    public string BirthPlace { get; set; }
    public DateOnly BirthDate { get; set; }
    public SocialStatusEnum SocialStatus { get; set; }
    public WorkingStatusEnum StatusWorkingId { get; set; }
    public string Notes { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }

    public int? CountryId { get; set; }

    [SwaggerIgnore]
    public string FullName { get; set; }
    [SwaggerIgnore]
    public string MotherFullName { get; set; }

    // JobInformation (حالة الموظف والتعيين)
    public DateOnly? HireDate { get; set; }
    public int? TypeOfJobId { get; set; }
    public bool? MedicalTest { get; set; }
    public bool? IsBehaviorCode { get; set; }
    public bool? IsMovedFromOutside { get; set; }
    public bool? IsReEmployed { get; set; }
    public int? IsStillWorking { get; set; }
    public DateOnly? EndOfServiceDate { get; set; }

    // ManagementInformation & EmployeePosition (الهيكل الإداري والمنصب)
    public int? PositionId { get; set; }
    public int? DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public int? DepartmentId { get; set; }
    public int? SectionId { get; set; }
    public int? UnitId { get; set; }

    // Job Functional Data (البيانات الوظيفية)
    public int? JobDegreeId { get; set; }
    public int? JobCategoryId { get; set; }
    public int? EmploymentDegreeId { get; set; }
    public int? JobTitleId { get; set; }
    public int? JobDescriptionId { get; set; }
}