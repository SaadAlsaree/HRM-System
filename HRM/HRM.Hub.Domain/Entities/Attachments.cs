namespace HRM.Hub.Domain.Entities;

public class Attachments: BaseEntity<Guid>
{
    public Guid? PrimaryTableId { get; set; }
    public string Tags { get; set; }
    public string TableName { get; set; }
    public string Notes { get; set; }
    public string ExtinctionFile { get; set; }
    public string Secret { get; set; }
}
