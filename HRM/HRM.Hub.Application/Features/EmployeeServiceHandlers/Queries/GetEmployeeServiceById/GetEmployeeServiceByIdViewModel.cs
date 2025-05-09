namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceById;
public class GetEmployeeServiceByIdViewModel: BaseViewModel<Guid>
{
    public string EmployeeName { get; set; }

    public string RetirementCalculation { get; set; }

    public string PromotionCalculation { get; set; }

    public string Notes { get; set; }

}
