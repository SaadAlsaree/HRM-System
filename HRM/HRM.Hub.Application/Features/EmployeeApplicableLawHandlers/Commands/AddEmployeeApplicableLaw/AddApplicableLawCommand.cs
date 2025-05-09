
using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;
public class AddApplicableLawCommand:IRequest<Response<bool>> 
{
    public Guid EmployeeId { get; set; }

    public int? LawId { get; set; }

    public string Note { get; set; }

}