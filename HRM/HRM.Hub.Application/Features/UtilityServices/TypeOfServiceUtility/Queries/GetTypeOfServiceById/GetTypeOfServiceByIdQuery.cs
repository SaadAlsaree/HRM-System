namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceById;

public class GetTypeOfServiceByIdQuery : IRequest<Response<GetTypeOfServiceByIdViewModel>>
{
    public int Id { get; set; }
}