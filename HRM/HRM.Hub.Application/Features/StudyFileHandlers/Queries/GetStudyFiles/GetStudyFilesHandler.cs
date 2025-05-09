using HRM.Hub.Application.Extensions;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;
using NPOI.SS.Formula.Functions;

namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFiles;

public class GetStudyFilesHandler : GetAllWithCountHandler<StudyFile, StudyFileViewModel, GetStudyFilesQuery>,
    IRequestHandler<GetStudyFilesQuery, Response<PagedResult<StudyFileViewModel>>>
{
    public GetStudyFilesHandler(IBaseRepository<StudyFile> repository)
        : base(repository)
    {
    }

    public override Expression<Func<StudyFile, StudyFileViewModel>> Selector => x => new StudyFileViewModel
    {
        EmployeeId = x.EmployeeId,
        Status = x.StatusId,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        DocumentDate = x.DocumentDate,
        DocumentNo = x.DocumentNo,
        Notes = x.Notes,
        Id = x.Id,
        StatusName = x.StatusId.GetDisplayName(),
        LotNumber = x.Employee.LotNumber,
    };

    public override Func<IQueryable<StudyFile>, IOrderedQueryable<StudyFile>> OrderBy =>
        o => o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<StudyFileViewModel>>> Handle(GetStudyFilesQuery request,
        CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
