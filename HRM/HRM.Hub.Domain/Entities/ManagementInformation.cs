namespace HRM.Hub.Domain.Entities;

public class ManagementInformation : BaseEntity<Guid>
{
    public int DirectorateId { get; set; }

    public int? SubDirectorateId { get; set; }

    public int? DepartmentId { get; set; }

    public int PositionId { get; set; }

    public int EmploymentDegreeId { get; set; }

    public int JobTitleId { get; set; }


    public int JobDescriptionId { get; set; }
    public int? StopJobDegreeId { get; set; }
    public string Notes { get; set; }
    public bool IsCurrent { get; set; }
    public bool IsInHiring { get; set; }



    public virtual Departments Department { get; set; }

    public virtual Directorates Directorate { get; set; }

    public virtual Employees Employee { get; set; }

    public virtual JobDegree EmploymentDegree { get; set; }

    public virtual JobDescription JobDescription { get; set; }

    public virtual JobTitle JobTitle { get; set; }

    public virtual Position Position { get; set; }

    public virtual JobDegree StopJobDegree { get; set; }

    public virtual SubDirectorates SubDirectorate { get; set; }

}
