namespace HRM.Hub.Application.Features.DepartmentOwnerHandlers.Queries.GetDepartmentOwnerById;

public class GetDepartmentOwnerByIdQuery : IRequest<Response<GetDepartmentOwnerByIdViewModel>>
{
    public Guid Id { get; set; }
}
