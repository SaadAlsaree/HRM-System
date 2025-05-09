namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.GetByIdChangeJobTitles;
public class GetByIdChangeJobTitlesHandler : GetByIdHandler<ChangeJobTitle, GetByIdChangeJobTitlesViewModel, GetByIdChangeJobTitlesQuery>,
        IRequestHandler<GetByIdChangeJobTitlesQuery, Response<GetByIdChangeJobTitlesViewModel>>
{
    public GetByIdChangeJobTitlesHandler(IBaseRepository<ChangeJobTitle> repository) : base(repository)
    {
    }

    public override Expression<Func<ChangeJobTitle, GetByIdChangeJobTitlesViewModel>> Selector => x => new GetByIdChangeJobTitlesViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        NewJobDescriptionId = x.NewJobDescriptionId,
        NewJobDescriptionName = x.NewJobDescription.Name,
        NewJobTitleId = x.NewJobTitleId,
        NewJobTitleName = x.NewJobTitle.Name,
        Note = x.Note,
        OldJobDescriptionId = x.OldJobDescriptionId,
        OldJobDescriptionName = x.OldJobDescription.Name,
        OldJobTitleId = x.OldJobTitleId,
        OrderDate = x.OrderDate,
        OrderNo = x.OrderNo,
        OldJobTitleName = x.OldJobTitle.Name,
        Status = x.StatusId
    };

    public async Task<Response<GetByIdChangeJobTitlesViewModel>> Handle(GetByIdChangeJobTitlesQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);

    public override Expression<Func<ChangeJobTitle, bool>>
    IdPredicate(GetByIdChangeJobTitlesQuery request) => x => x.Id == request.Id;
}