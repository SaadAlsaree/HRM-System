
namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalanceById
{
    public class GetLeavesMedicalBalanceQueryByIdViewModel :BaseViewModel<Guid>
    {
        public double? Balance { get; set; }
        public string Note { get; set; }
    }
}
