namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsList;

public class GetEmployeeDocumentsListHandler : GetAllHandler<EmployeeDocumentsType, GetEmployeeDocumentsListViewModel, GetEmployeeDocumentsListQuery>, IRequestHandler<GetEmployeeDocumentsListQuery, Response<IEnumerable<GetEmployeeDocumentsListViewModel>>>
{
    public GetEmployeeDocumentsListHandler(IBaseRepository<EmployeeDocumentsType> repositoryEmployeeDocumentsList)
        : base(repositoryEmployeeDocumentsList) { }

    public override Expression<Func<EmployeeDocumentsType, GetEmployeeDocumentsListViewModel>> Selector => z => new GetEmployeeDocumentsListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<EmployeeDocumentsType>, IOrderedQueryable<EmployeeDocumentsType>> OrderBy => order => order.OrderBy(z => z.CreateAt);

    public async Task<Response<IEnumerable<GetEmployeeDocumentsListViewModel>>> Handle(GetEmployeeDocumentsListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}