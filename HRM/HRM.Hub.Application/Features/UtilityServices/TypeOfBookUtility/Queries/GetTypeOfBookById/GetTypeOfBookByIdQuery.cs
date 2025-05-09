namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookById;

public class GetTypeOfBookByIdQuery : IRequest<Response<GetTypeOfBookByIdViewModel>>
{
    public int Id { get; set; }
}