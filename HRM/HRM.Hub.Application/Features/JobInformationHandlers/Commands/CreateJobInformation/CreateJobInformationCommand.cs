namespace HRM.Hub.Application.Features.JobInformationHandlers.Commands.CreateJobInformation;
public sealed record CreateJobInformationCommand : IRequest<Response<bool>>
{
    public DateOnly HireDate { get; set; }

    public DateOnly? EndOfServiceDate { get; set; }

    public int? TypeOfJobId { get; set; }

    public Guid? AssignedId { get; set; }
    public Guid EmployeeId { get; set; }

    public bool? MedicalTest { get; set; }

    public bool? IsReEmployed { get; set; }

    public bool? IsMovedFromOutside { get; set; }

    public int? IsStillWorking { get; set; }
    public bool? IsBehaviorCode { get; set; }

    public Guid? CreateBy { get; set;}

}