namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniorityById;

public class GetTypeOfSeniorityByIdQuery : IRequest<Response<GetTypeOfSeniorityByIdViewModel>>
{
    public int Id { get; set; }
}