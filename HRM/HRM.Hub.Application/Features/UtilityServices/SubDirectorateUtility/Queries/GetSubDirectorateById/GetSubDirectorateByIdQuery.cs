namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorateById;

public class GetSubDirectorateByIdQuery : IRequest<Response<GetSubDirectorateByIdViewModel>>
{
    public int Id { get; set; }
}