namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartmentList;

public class GetDepartmentListQuery : IRequest<Response<IEnumerable<GetDepartmentListViewModel>>>
{
    public int Id { get; set; }
    public string NameTerm { get; set; }
}