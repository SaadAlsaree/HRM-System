namespace HRM.Hub.Application.Features.EmployeeDocument.Commands.AddEmployeeDocument;
public class AddDocumentHandler : CreateHandler<EmployeeDocuments, AddDocumentCommand>, IRequestHandler<AddDocumentCommand, Response<bool>>
{
    public AddDocumentHandler(IBaseRepository<EmployeeDocuments> repositoryApplicableLaws)
        : base(repositoryApplicableLaws) 
    {
    }
    protected override Expression<Func<EmployeeDocuments, bool>> ExistencePredicate(AddDocumentCommand request) => null;

    protected override EmployeeDocuments MapToEntity(AddDocumentCommand request)
    {
        return new EmployeeDocuments
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            EmployeeDocumentTypeId = request.EmployeeDocumentTypeId,
            Notes = request.Notes,
            DocumentAttribute = JsonConvert.SerializeObject(request.DocumentAttributes),
        };
    }

    public async Task<Response<bool>> Handle(AddDocumentCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}

    