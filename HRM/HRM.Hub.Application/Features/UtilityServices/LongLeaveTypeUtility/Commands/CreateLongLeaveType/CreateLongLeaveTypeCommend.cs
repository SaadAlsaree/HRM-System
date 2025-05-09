namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Commands.CreateLongLeaveType;

public class CreateLongLeaveTypeCommend : IRequest<Response<bool>>
{
    public string Name { get; set; }
}
