namespace HRM.Hub.Domain.Entities;

public class JobInformation: BaseEntity<Guid>
{

    public DateOnly HireDate { get; set; }

    public DateOnly? EndOfServiceDate { get; set; }

    public int? TypeOfJobId { get; set; }

    public Guid? AssignedId { get; set; }

    public bool? MedicalTest { get; set; }

    public bool? IsReEmployed { get; set; }

    public bool? IsMovedFromOutside { get; set; }

    public int? IsStillWorking { get; set; }
    public bool? IsBehaviorCode { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual TypeOfJob TypeOfJob { get; set; }
}
