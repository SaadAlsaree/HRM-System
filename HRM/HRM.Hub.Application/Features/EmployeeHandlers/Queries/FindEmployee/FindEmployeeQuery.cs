namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.FindEmployee;
public class FindEmployeeQuery : IRequest<Response<IEnumerable<FindEmployeeViewModel>>>
{
    public SearchBy SearchBy { get; set; }
    public string Search { get; set; }
}