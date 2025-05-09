
using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Commands.AddEmployeeService;
public class AddEmployeeServiceCommand : IRequest<Response<bool>> 
{
    public Guid EmployeeId { get; set; }

    public string RetirementCalculation { get; set; }

    public string PromotionCalculation { get; set; }

    public string Notes { get; set; }

}