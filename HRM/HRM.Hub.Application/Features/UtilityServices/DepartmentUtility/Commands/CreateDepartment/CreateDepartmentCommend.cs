using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Commands.CreateDepartment;

public class CreateDepartmentCommend : IRequest<Response<bool>>
{
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }
}
