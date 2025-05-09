namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsById;
public class GetEmployeeDocumentsByIdHandler : GetByIdHandler<EmployeeDocumentsType, GetEmployeeDocumentsByIdViewModel, GetEmployeeDocumentsByIdQuery>, IRequestHandler<GetEmployeeDocumentsByIdQuery, Response<GetEmployeeDocumentsByIdViewModel>>
{
    public GetEmployeeDocumentsByIdHandler(IBaseRepository<EmployeeDocumentsType> repositoryEmployeeDocuments)
        : base(repositoryEmployeeDocuments) { }

    public override Expression<Func<EmployeeDocumentsType, bool>> IdPredicate(GetEmployeeDocumentsByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<EmployeeDocumentsType, GetEmployeeDocumentsByIdViewModel>> Selector => a => new GetEmployeeDocumentsByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        Status = a.StatusId
    };
    public async Task<Response<GetEmployeeDocumentsByIdViewModel>> Handle(GetEmployeeDocumentsByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
