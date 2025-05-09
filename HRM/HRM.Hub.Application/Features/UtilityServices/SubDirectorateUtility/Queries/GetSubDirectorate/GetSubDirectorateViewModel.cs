namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Queries.GetSubDirectorate;
public class GetSubDirectorateViewModel
{
    public int Id { get; set; }
    public int DirectorateId { get; set; }
    public string DirectorateName { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}