using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Commands.UpdateSection;

public class UpdateSectionCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public int DepartmentId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }
}
