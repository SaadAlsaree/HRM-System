namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.AddEmployeeDisciplinary;
public class AddDisciplinaryCommand:IRequest<Response<bool>> 
{
    public Guid EmployeeId { get; set; }
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