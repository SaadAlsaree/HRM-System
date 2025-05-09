namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLaw;
public class GetApplicableLawViewModel : BaseViewModel<Guid>
{
    public int? LawId { get; set; }
    public string LawNamw { get; set; }
    public string Note { get; set; }
}
