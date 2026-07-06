using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class AnnualAllowanceRule : BaseEntity<int>
{
    public int? JobDegreeId { get; set; }
    public int? JobCategoryId { get; set; }
    public int? AcademicAchievementId { get; set; }
    public int? ApplicableLawId { get; set; }
    public int BaseMonths { get; set; }
    public int Priority { get; set; }
    public bool IsActive { get; set; } = true;

    public virtual JobDegree JobDegree { get; set; }
    public virtual JobCategory JobCategory { get; set; }
    public virtual AcademicAchievement AcademicAchievement { get; set; }
    public virtual Laws ApplicableLaw { get; set; }
}