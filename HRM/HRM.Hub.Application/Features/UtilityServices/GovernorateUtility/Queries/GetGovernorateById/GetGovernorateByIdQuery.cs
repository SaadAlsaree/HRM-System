namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorateById;

public class GetGovernorateByIdQuery : IRequest<Response<GetGovernorateByIdViewModel>>
{
    public int Id { get; set; }
}