using HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEducationInformationToEmployeeProfile;

namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetManagementInfoEmployeeProfile;
public class GetManagementInfoToEmployeeProfileQuery : IRequest<Response<GetManagementInfoToEmployeeProfileViewModel>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

}