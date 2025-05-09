using System.ComponentModel.DataAnnotations;

namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetAdministrativeOrderToEmployeeProfile;

public class GetAdministrativeOrderToEmployeeProfileQuery : IRequest<Response<GetAdministrativeOrderToEmployeeProfileViewModel>>
{
    [Required]
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
}