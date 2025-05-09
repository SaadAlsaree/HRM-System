namespace HRM.Hub.Application.Features.UtilityServices.TerritoryUtility.Queries.GetTerritoryById;

public class GetTerritoryByIdQuery : IRequest<Response<GetTerritoryByIdViewModel>>
{
    public int Id { get; set; }
}