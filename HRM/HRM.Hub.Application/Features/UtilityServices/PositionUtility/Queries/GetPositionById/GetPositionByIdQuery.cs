namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPositionById;

public class GetPositionByIdQuery : IRequest<Response<GetPositionByIdViewModel>>
{
    public int Id { get; set; }
}