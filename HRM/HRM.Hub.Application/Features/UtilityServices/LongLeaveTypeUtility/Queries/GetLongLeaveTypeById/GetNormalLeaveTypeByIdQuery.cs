namespace HRM.Hub.Application.Features.UtilityServices.LongLeaveTypeUtility.Queries.GetLongLeaveTypeById;

public class GetLongLeaveTypeByIdQuery : IRequest<Response<GetLongLeaveTypeByIdViewModel>>
{
    public int Id { get; set; }
}