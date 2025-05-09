using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.SectionUtility.Commands.CreateSection;

public class CreateSectionCommend : IRequest<Response<bool>>
{
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public int DepartmentId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }

}
