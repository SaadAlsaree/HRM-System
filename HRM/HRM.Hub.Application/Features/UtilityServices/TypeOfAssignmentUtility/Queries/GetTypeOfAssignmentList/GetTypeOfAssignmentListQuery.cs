namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentList;

public class GetTypeOfAssignmentListQuery : IRequest<Response<IEnumerable<GetTypeOfAssignmentListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}