

namespace HRM.Hub.Domain.Entities
{
    public class LeavesMedicalBalance : BaseEntity<Guid>
    {
        public double? Balance { get; set; }
        public string Note { get; set; } = string.Empty;
        public virtual Employees Employee { get; set; }
    }
}
