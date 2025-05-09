

namespace HRM.Hub.Domain.Entities
{
    public class LeavesMedicalBalance: BaseEntity<Guid>
    {
        public double? Balance { get; set; }
        public string Note { get; set; }
        public virtual Employees Employee { get; set; }
    }
}
