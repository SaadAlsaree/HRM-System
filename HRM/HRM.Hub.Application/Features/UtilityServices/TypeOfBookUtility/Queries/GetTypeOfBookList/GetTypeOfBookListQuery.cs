namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookList;

public class GetTypeOfBookListQuery : IRequest<Response<IEnumerable<GetTypeOfBookListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}