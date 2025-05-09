using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetEmployeeAddressInformation;

public class GetEmployeeAddressInformationQuery : IRequest<Response<PagedResult<GetEmployeeAddressInformationViewModel>>>, IPaginationQuery
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; } = Status.None;

    public int Page { get; set; }
    public byte PageSize { get; set; }
}