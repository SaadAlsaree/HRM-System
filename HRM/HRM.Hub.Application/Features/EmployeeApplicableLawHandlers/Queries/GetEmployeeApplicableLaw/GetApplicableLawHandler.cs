namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Queries.GetApplicableLaw;
public class GetApplicableLawHandler :
    GetAllWithCountHandler<EmployeeApplicableLaws, GetApplicableLawViewModel, GetApplicableLawQuery>,
    IRequestHandler<GetApplicableLawQuery, Response<PagedResult<GetApplicableLawViewModel>>>
{
    public GetApplicableLawHandler(IBaseRepository<EmployeeApplicableLaws> repositoryApplicableLaw)
        : base(repositoryApplicableLaw) { }

    public override Expression<Func<EmployeeApplicableLaws, GetApplicableLawViewModel>> Selector => z => new GetApplicableLawViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        LawId = z.LawId,
        Note = z.Note,
        Status = z.StatusId,
        LawNamw = z.Law.Name
    };

    public override Func<IQueryable<EmployeeApplicableLaws>, IOrderedQueryable<EmployeeApplicableLaws>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetApplicableLawViewModel>>> Handle(GetApplicableLawQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

