namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetEducationInformationToEmployeeProfile;
public class GetEducationInfoToEmployeeProfileQuery : IRequest<Response<GetEducationInfoToEmployeeProfileViewModel>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

}