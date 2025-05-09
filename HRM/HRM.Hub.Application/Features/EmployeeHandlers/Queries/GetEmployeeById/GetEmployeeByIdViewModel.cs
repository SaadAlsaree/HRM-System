using HRM.Hub.Domain.Entities;

namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.GetEmployeeById;
public class GetEmployeeByIdViewModel : BaseViewModel<Guid>
{
    public string Notes { get; set; }
    public string StatisticalIndex { get; set; }
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
    public GenderEnum GenderId { get; set; }
    public string BirthPlace { get; set; }
    public DateOnly? BirthDate { get; set; }
    public SocialStatusEnum? SocialStatus { get; set; }
    public WorkingStatusEnum StatusWorkingId { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }
    public int? CountryId { get; set; }
    public string CountryName { get; set; }
    public int? DirectorateId { get; set; }
    public int? TypeOfJobId { get; set; }
    public int? SubDirectorateId { get; set; }
    public bool IsPinned { get; set; }
    public int? DepartmentId { get; set; }

    public int? SectionId { get; set; }

    public int? UnitId { get; set; }

    public int? JobDegreeId { get; set; }

    public int? JobCategoryId { get; set; }

    public int? JobTitleId { get; set; }

    public int? JobDescriptionId { get; set; }
    public string MotherFullName { get; set; }
}