namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfServiceById;

public class GetTypeOfServiceByIdViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string StatusName { get; set; }
    public Status Status { get; set; }
}