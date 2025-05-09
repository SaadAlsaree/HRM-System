using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Commands.UpdateDepartment;

public class UpdateDepartmentCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public int Id { get; set; }
    public int DirectorateId { get; set; }

    public int SubDirectorateId { get; set; }

    public string Name { get; set; }

    public string ShortKey { get; set; }

    public Status Status { get; set; }
}
