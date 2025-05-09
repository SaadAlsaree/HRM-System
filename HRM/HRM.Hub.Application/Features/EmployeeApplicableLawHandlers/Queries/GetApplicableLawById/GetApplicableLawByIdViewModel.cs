namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLawById;
public class GetApplicableLawByIdViewModel : BaseViewModel<Guid>
{
    public int? LawId { get; set; }
    public string Note { get; set; }
}
