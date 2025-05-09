using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.AbsenceHandlers.Commands.UpdateAbsence;
public sealed record UpdateAbsenceCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid AbsenceId { get; set; }
    public Guid EmployeeId { get; set; }
    public DateOnly? AbsenceDate { get; set; }
    public string BookNo { get; set; }
    public int CountOfDays { get; set; }
    public DateOnly? BookDate { get; set; }
    public Guid? LastUpdateBy { get; set; }
    public string Note { get; set; }
    
}