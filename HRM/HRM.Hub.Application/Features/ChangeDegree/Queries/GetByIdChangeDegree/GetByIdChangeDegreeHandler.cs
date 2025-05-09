namespace HRM.Hub.Application.Features.ChangeDegree.Queries.GetByIdChangeDegree;
public class GetByIdChangeDegreeHandler : GetByIdHandler<ChangeDegrees,
GetByIdChangeDegreeViewModel, GetByIdChangeDegreeQuery>,
    IRequestHandler<GetByIdChangeDegreeQuery, Response<GetByIdChangeDegreeViewModel>>
{
    public GetByIdChangeDegreeHandler(IBaseRepository<ChangeDegrees> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeDegrees, GetByIdChangeDegreeViewModel>>
        Selector => x => new GetByIdChangeDegreeViewModel()
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

    public async Task<Response<GetByIdChangeDegreeViewModel>>
        Handle(GetByIdChangeDegreeQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);

    public override Expression<Func<ChangeDegrees, bool>>
    IdPredicate(GetByIdChangeDegreeQuery request) => x => x.Id == request.Id;
}