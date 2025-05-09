using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using HRM.Hub.Application.Helper.Pagination;

namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFiles;

public class GetStudyFilesQuery:IRequest<Response<PagedResult<StudyFileViewModel>>>, IPaginationQuery
{
    public Guid EmployeeId { get; set; }
    public string DocumentNo { get; set; }
    public DateOnly? DocumentDateFrom { get; set; }
    public DateOnly? DocumentDateTo { get; set; }
    public int Page { get; set; }
    public byte PageSize { get; set; }
    public Status Status { get; set; } = Status.None;

}