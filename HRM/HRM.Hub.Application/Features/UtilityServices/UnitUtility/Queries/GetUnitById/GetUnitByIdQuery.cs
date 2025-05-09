namespace HRM.Hub.Application.Features.UtilityServices.UnitUtility.Queries.GetUnitById;

public class GetUnitByIdQuery : IRequest<Response<GetUnitByIdViewModel>>
{
    public int Id { get; set; }
}