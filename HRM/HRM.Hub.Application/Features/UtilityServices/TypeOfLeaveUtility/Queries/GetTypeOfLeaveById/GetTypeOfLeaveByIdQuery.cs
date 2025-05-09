namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveById;

public class GetTypeOfLeaveByIdQuery : IRequest<Response<GetTypeOfLeaveByIdViewModel>>
{
    public int Id { get; set; }
}