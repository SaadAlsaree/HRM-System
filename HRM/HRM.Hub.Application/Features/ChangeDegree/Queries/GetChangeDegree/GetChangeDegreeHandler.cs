namespace HRM.Hub.Application.Features.ChangeDegree.Queries.GetChangeDegree;
public class GetChangeDegreeHandler : GetAllWithCountHandler<ChangeDegrees, GetChangeDegreeViewModel,
GetChangeDegreeQuery>,
IRequestHandler<GetChangeDegreeQuery, Response<PagedResult<GetChangeDegreeViewModel>>>
{
    public GetChangeDegreeHandler(IBaseRepository<ChangeDegrees> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeDegrees, GetChangeDegreeViewModel>> Selector => x => new GetChangeDegreeViewModel()
    {
        Id = x.Id,
        LotNumber = x.Employee.LotNumber,
        EmployeeId = x.EmployeeId,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        OldCategoryDueDate = x.OldCategoryDueDate,
        JobCategoryFromId = x.JobCategoryFromId,
        JobCategoryToId = x.JobCategoryToId,
        JobCategoryFromName = x.JobCategoryFrom.Name,
        JobCategoryToName = x.JobCategoryTo.Name,
        JobDegreeFromId = x.JobDegreeFromId,
        JobDegreeToId = x.JobDegreeToId,
        JobDegreeFromName = x.JobDegreeFrom.Name,
        JobDegreeToName = x.JobDegreeTo.Name,
        JobDescriptionFromId = x.JobDescriptionFromId,
        JobDescriptionFromName = x.JobDescriptionFrom.Name,
        JobDescriptionToId = x.JobDescriptionToId,
        JobDescriptionToName = x.JobDescriptionTo.Name,
        JobTitleFromId = x.JobTitleFromId,
        JobTitleToId = x.JobTitleToId,
        JobTitleFromName = x.JobTitleFrom.Name,
        JobTitleToName = x.JobTitleTo.Name,
        OldDegreeDueDate = x.OldDegreeDueDate,
        NewCategoryDueDate = x.NewDegreeDueDate,
        NewDegreeDueDate = x.NewDegreeDueDate,
        OrderDate = x.OrderDate,
        OrderNo = x.OrderNo,
        Note = x.Note,
        Status = x.StatusId
    };

    public override Func<IQueryable<ChangeDegrees>, IOrderedQueryable<ChangeDegrees>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetChangeDegreeViewModel>>> Handle(GetChangeDegreeQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}