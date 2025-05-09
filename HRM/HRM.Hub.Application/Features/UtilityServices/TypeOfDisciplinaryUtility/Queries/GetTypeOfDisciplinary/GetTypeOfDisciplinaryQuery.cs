namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinary;

public class GetTypeOfDisciplinaryQuery : IRequest<Response<PagedResult<GetTypeOfDisciplinaryViewModel>>>, IPaginationQuery
{
    public int Page { get; set; }
    public byte PageSize { get; set; }
}
