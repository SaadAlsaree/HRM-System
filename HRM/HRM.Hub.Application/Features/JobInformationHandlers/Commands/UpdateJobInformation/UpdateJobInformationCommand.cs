using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.JobInformationHandlers.Commands.UpdateJobInformation;
public sealed record UpdateJobInformationCommand : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public DateOnly HireDate { get; set; }
    public DateOnly? EndOfServiceDate { get; set; }

    public int? TypeOfJobId { get; set; }

    public Guid? AssignedId { get; set; }

    public bool? MedicalTest { get; set; }

    public bool? IsReEmployed { get; set; }

    public bool? IsMovedFromOutside { get; set; }

    public int? IsStillWorking { get; set; }
    public bool? IsBehaviorCode { get; set; }
    public Guid? LastUpdateBy { get; set; }
    
}