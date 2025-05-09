namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveTypeById;

public class GetNormalLeaveTypeByIdQuery : IRequest<Response<GetNormalLeaveTypeByIdViewModel>>
{
    public int Id { get; set; }
}