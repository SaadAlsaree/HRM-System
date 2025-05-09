namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentById;

public class GetTypeOfAssignmentByIdQuery : IRequest<Response<GetTypeOfAssignmentByIdViewModel>>
{
    public int Id { get; set; }
}