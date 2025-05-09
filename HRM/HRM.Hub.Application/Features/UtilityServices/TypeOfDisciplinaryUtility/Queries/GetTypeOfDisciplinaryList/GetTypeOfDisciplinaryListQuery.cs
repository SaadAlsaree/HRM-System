namespace HRM.Hub.Application.Features.UtilityServices.TypeOfDisciplinaryUtility.Queries.GetTypeOfDisciplinaryList;

public class GetTypeOfDisciplinaryListQuery : IRequest<Response<IEnumerable<GetTypeOfDisciplinaryListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}