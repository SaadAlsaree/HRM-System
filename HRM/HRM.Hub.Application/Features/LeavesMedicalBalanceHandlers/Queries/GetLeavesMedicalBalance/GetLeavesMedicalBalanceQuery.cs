

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalance
{
    internal class GetLeavesMedicalBalanceQuery : IRequest<Response<PagedResult<GetLeavesMedicalBalanceQueryViewModel>>>, IPaginationQuery
    {
        public Guid EmployeeId { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public Status Status { get; set; } = Status.None;
    }

}
