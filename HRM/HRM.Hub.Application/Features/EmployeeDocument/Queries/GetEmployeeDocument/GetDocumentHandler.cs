namespace HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocument;
public class GetDisciplinaryHandler :
    GetAllWithCountHandler<EmployeeDocuments, GetDocumentViewModel, GetDocumentQuery>,
    IRequestHandler<GetDocumentQuery, Response<PagedResult<GetDocumentViewModel>>>
{
    public GetDisciplinaryHandler(IBaseRepository<EmployeeDocuments> repositoryDocument)
        : base(repositoryDocument) { }

    public override Expression<Func<EmployeeDocuments, GetDocumentViewModel>> Selector => z => new GetDocumentViewModel()
    {
        Id = z.Id,
        FullName = z.Employee.FullName,
        EmployeeId = z.EmployeeId,
        EmployeeDocumentTypeId = z.EmployeeDocumentTypeId,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
        Status = z.StatusId,
        Note = z.Notes,
        CreatedAt = z.CreateAt,
        EmployeeDocumentTypeName = z.EmployeeDocumentType.Name,
        DocumentAttribute = JsonConvert.DeserializeObject(z.DocumentAttribute)
    };

    public override Func<IQueryable<EmployeeDocuments>, IOrderedQueryable<EmployeeDocuments>> OrderBy => order => order.OrderBy(z => z.CreateBy);

    public async Task<Response<PagedResult<GetDocumentViewModel>>> Handle(GetDocumentQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

