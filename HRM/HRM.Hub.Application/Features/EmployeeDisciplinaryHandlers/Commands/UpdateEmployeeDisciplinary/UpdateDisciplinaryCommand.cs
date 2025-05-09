using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.UpdateEmployeeDisciplinary;

public class UpdateDisciplinaryCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }
    public string TitleOfBook { get; set; }
    public int TypeOfDisciplinaryId { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public bool? StopPromotion { get; set; }
    public string DisciplinaryLaw { get; set; }
    public int? CountOfDayDelay { get; set; }
    public string Note { get; set; }
    public string Reason { get; set; }
}
