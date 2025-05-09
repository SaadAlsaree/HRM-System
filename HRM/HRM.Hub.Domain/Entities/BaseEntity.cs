using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class BaseEntity<T>
{
    [Key]
    public T Id { get; set; }
    public DateTime CreateAt { get; set; } = DateTime.Now;
    public Guid? CreateBy { get; set; }
    public DateTime? LastUpdateAt { get; set; }
    public Guid? LastUpdateBy { get; set; }
    public Status StatusId { get; set; } 
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? DoneProcdureDate { get; set; }
    public Guid? DeletedBy { get; set; }
}