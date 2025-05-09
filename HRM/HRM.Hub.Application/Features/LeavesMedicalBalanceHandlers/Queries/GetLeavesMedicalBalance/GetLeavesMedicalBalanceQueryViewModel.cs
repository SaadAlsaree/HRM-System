
namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalance
{
    public class GetLeavesMedicalBalanceQueryViewModel : BaseViewModel<Guid>
    {
        public double? Balance { get; set; }

        public string Note { get; set; }
    }
}
