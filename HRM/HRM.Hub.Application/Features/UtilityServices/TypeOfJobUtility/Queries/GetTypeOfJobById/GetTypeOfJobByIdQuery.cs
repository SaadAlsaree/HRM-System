namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobById;

public class GetTypeOfJobByIdQuery : IRequest<Response<GetTypeOfJobByIdViewModel>>
{
    public int Id { get; set; }
}