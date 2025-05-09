using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.CreateSubDirectorate;

public class CreateSubDirectorateCommend : IRequest<Response<bool>>
{
    public int DirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }

}
