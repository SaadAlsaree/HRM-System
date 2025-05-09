namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLawById;

public class GetLawByIdQuery : IRequest<Response<GetLawByIdViewModel>>
{
    public int Id { get; set; }
}