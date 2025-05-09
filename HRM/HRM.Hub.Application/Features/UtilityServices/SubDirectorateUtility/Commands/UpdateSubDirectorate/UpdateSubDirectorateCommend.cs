namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.UpdateSubDirectorate;

public class UpdateSubDirectorateCommend : IRequest<Response<bool>>
{
    public int Id { get; set; }
    public int DirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }
}
