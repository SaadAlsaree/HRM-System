namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensions;

public class GetStudyLeaveExtensionHandler : GetAllWithCountHandler<StudyLeaveExtension, StudyLeaveExtensionViewModel, GetStudyLeaveExtensionQuery>, IRequestHandler<GetStudyLeaveExtensionQuery, Response<PagedResult<StudyLeaveExtensionViewModel>>>
{
    public GetStudyLeaveExtensionHandler(IBaseRepository<StudyLeaveExtension> repositoryStudyLeave)
        : base(repositoryStudyLeave) { }

    public override Expression<Func<StudyLeaveExtension, StudyLeaveExtensionViewModel>> Selector => z => new StudyLeaveExtensionViewModel()
    {
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        Status = z.StatusId,
        Notes = z.Notes,
        StudyFileId = z.StudyFileId,
        Id = z.Id,
        FromDate = z.FromDate,
        OrderDate = z.OrderDate,
        StudyExtensionOrderTypeId = z.StudyExtensionOrderTypeId,
        StudyExtensionOrderTypeName = z.StudyExtensionOrderType.Name,
        OrderNo = z.OrderNo,
        StudyFileDocumentNo  = z.StudyFile.DocumentNo,
        ToDate = z.ToDate,
        CountOfDay = z.CountOfDay,
        LotNumber =z.Employee.LotNumber
    };

    public override Func<IQueryable<StudyLeaveExtension>, IOrderedQueryable<StudyLeaveExtension>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<StudyLeaveExtensionViewModel>>> Handle(GetStudyLeaveExtensionQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
