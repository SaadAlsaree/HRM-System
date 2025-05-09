

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalanceById
{
    public class GetLeavesMedicalBalanceByIdQuery : IRequest<Response<GetLeavesMedicalBalanceQueryByIdViewModel>>
    {
        public Guid Id { get; set; }
        public Status Status { get; set; } = Status.None;
    }
}
