
using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Commands.AddManagementInfoServicermation;
public class AddMangementInfoCommand : IRequest<Response<bool>> 
{
    public Guid EmployeeId { get; set; }
    public int DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public int? DepartmentId { get; set; }
    public int? SectionId { get; set; }
    public int? UnitId { get; set; }
    public int PositionId { get; set; }
    public int EmploymentDegreeId { get; set; }
    public int JobDegreeId { get; set; }
    public int JobCategoryId { get; set; }
    public int JobTitleId { get; set; }
    public int JobDescriptionId { get; set; }
    public int? StopJobDegreeId { get; set; }
    public string Notes { get; set; }

}