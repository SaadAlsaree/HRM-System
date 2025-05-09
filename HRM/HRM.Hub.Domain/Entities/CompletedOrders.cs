namespace HRM.Hub.Domain.Entities;

public class CompletedOrders : BaseEntity<Guid>
{
    public Guid TeamId { get; set; }
    public string TeamName { get; set; }
    public DateOnly OnDate { get; set; }
    public int CountOfOrders { get; set; }
}
// query in postgresql to insert data to CompletedOrders table with CreateAt = 2021-09-01
// insert into "CompletedOrders" ("Id", "TeamId", "TeamName", "OnDate", "CountOfOrders", "CreatedAt", "CreatedBy", "UpdatedAt", "UpdatedBy", "DeletedAt", "DeletedBy")