namespace HRM.Hub.Application.Features.EmployeeDocument.Queries.GetEmployeeDocumentById;
public class GetDisciplinaryByIdHandler : GetByIdHandler<EmployeeDocuments, GetDocumentByIdViewModel, GetDocumentByIdQuery>, IRequestHandler<GetDocumentByIdQuery, Response<GetDocumentByIdViewModel>>
{
    public GetDisciplinaryByIdHandler(IBaseRepository<EmployeeDocuments> repositoryEmployeeDocuments)
        : base(repositoryEmployeeDocuments) { }

    public override Expression<Func<EmployeeDocuments, bool>> IdPredicate(GetDocumentByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EmployeeDocuments, GetDocumentByIdViewModel>> Selector => z => new GetDocumentByIdViewModel()
    {
        Id = z.Id,
        FullName = z.Employee.FullName,
        EmployeeId = z.EmployeeId,
        EmployeeDocumentTypeId = z.EmployeeDocumentTypeId,
        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.LotNumber,
        Status = z.StatusId,
        EmployeeDocumentTypeName = z.EmployeeDocumentType.Name,
        CreatedAt = z.CreateAt,
        Notes = z.Notes,
        DocumentAttributes = JsonConvert.DeserializeObject(z.DocumentAttribute)
    };
    public async Task<Response<GetDocumentByIdViewModel>> Handle(GetDocumentByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
