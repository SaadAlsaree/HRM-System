using System.ComponentModel.DataAnnotations;

namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEmployeeInformation;
public class GetEmployeeInformationQuery : IRequest<Response<GetEmployeeInformationViewModel>>
{
    [Required]
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}