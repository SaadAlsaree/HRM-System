using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFiles;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeave;

public class GetStudyLeaveQuery : IRequest<Response<PagedResult<StudyLeaveViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}