namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.GetChangeJobTitles;
public class GetChangeJobTitlesHandler : GetAllWithCountHandler<ChangeJobTitle, GetChangeJobTitlesViewModel, GetChangeJobTitlesQuery>,
IRequestHandler<GetChangeJobTitlesQuery, Response<PagedResult<GetChangeJobTitlesViewModel>>>
{
    public GetChangeJobTitlesHandler(IBaseRepository<ChangeJobTitle> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeJobTitle, GetChangeJobTitlesViewModel>> Selector => x => new GetChangeJobTitlesViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        NewJobDescriptionId = x.NewJobDescriptionId,
        NewJobDescriptionName = x.NewJobDescription.Name,
        NewJobTitleId = x.NewJobTitleId,
        NewJobTitleName = x.NewJobTitle.Name,
        Note = x.Note,
        OrderNo = x.OrderNo,
        OrderDate = x.OrderDate,
        OldJobDescriptionId = x.OldJobDescriptionId,
        OldJobDescriptionName = x.OldJobDescription.Name,
        OldJobTitleId = x.OldJobTitleId,
        OldJobTitleName = x.OldJobTitle.Name,
        Status = x.StatusId
    };

    public override Func<IQueryable<ChangeJobTitle>, IOrderedQueryable<ChangeJobTitle>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetChangeJobTitlesViewModel>>> Handle(GetChangeJobTitlesQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}
