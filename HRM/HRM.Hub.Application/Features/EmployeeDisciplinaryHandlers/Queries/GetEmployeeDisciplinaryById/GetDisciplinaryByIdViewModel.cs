namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.GetEmployeeDisciplinaryById;
public class GetDisciplinaryByIdViewModel:BaseViewModel<Guid>
{
    public string TitleOfBook { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public bool? StopPromotion { get; set; }
    public int? CountOfDayDelay { get; set; }
    public string DisciplinaryLaw { get; set; }
    public string TypeOfDisciplinaryName { get; set; }
    public int TypeOfDisciplinaryId { get; set; }
    public string Note { get; set; }
    public string Reason { get; set; }
}
