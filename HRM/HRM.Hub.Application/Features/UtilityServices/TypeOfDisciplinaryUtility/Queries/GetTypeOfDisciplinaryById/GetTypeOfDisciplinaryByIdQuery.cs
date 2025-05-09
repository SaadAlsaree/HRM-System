namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryById;

public class GetTypeOfDisciplinaryByIdQuery : IRequest<Response<GetTypeOfDisciplinaryByIdViewModel>>
{
    public int Id { get; set; }
}