namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveList;

public class GetTypeOfLeaveListQuery : IRequest<Response<IEnumerable<GetTypeOfLeaveListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}