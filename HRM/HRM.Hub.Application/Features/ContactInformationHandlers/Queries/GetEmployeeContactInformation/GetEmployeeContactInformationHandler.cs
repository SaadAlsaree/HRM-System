
namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInformation;

public class GetEmployeeContactInformationHandler :
    GetAllWithCountHandler<ContactInformation, GetContactInformationViewModel, GetEmployeeContactInformationQuery>,
    IRequestHandler<GetEmployeeContactInformationQuery, Response<PagedResult<GetContactInformationViewModel>>>
{
    public GetEmployeeContactInformationHandler(IBaseRepository<ContactInformation> repositoryContactInformation)
        : base(repositoryContactInformation) { }

    public override Expression<Func<ContactInformation, GetContactInformationViewModel>> Selector => z => new GetContactInformationViewModel()
    {
        Id = z.Id,
        Status = z.StatusId,
        Notes = z.Notes,
        LotNumber = z.Employee != null ? z.Employee.LotNumber : null,
        JobCode = z.Employee != null ? z.Employee.JobCode : null,
        FullName = z.Employee != null ? z.Employee.FullName : null,
        EmployeeId = z.EmployeeId,
        PhoneNumber = z.PhoneNumber,
        ContactName = z.ContactName,
        LevelOfRelationshipId = z.LevelOfRelationshipId,
        LevelOfRelationshipName = z.LevelOfRelationship != null ? z.LevelOfRelationship.Name : null,
    };

    public override Func<IQueryable<ContactInformation>, IOrderedQueryable<ContactInformation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetContactInformationViewModel>>> Handle(GetEmployeeContactInformationQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}