namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Queries.GetDirectorateById;

public class GetDirectorateByIdQuery : IRequest<Response<GetDirectorateByIdViewModel>>
{
    public int Id { get; set; }
}