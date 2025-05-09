namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAllAbsences;
public class GetAllAbsencesViewModel : BaseViewModel<Guid>
{
    public string StatisticalIndex { get; set; }
    public string BookNo { get; set; }
    public DateOnly? BookDate { get; set; }
    public DateOnly? AbsenceDate { get; set; }
    public string AbsenceOrderNo { get; set; }
    public DateOnly? AbsenceOrderDate { get; set; }
    public string ReturnOrderNo { get; set; }
    public DateOnly? ReturnOrderDate { get; set; }
    public int? CountOfDays { get; set; }
    public string Note { get; set; }
}