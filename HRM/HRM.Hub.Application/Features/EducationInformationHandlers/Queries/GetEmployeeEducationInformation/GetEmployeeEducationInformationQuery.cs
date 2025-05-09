using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.GetEmployeeEducationInformation;
public class GetEmployeeEducationInformationQuery : IRequest<Response<PagedResult<GetEmployeeEducationInformationViewModel>>>, IPaginationQuery
{
    [BindNever]
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;
    public int Page { get; set; }
    public byte PageSize { get; set; }
}