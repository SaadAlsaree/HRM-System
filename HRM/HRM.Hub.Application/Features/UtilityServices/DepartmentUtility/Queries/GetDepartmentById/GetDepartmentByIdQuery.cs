namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartmentById;

public class GetDepartmentByIdQuery : IRequest<Response<GetDepartmentByIdViewModel>>
{
    public int Id { get; set; }
}