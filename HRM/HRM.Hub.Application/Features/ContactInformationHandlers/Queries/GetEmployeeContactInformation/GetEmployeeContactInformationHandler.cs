
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
        LotNumber = z.Employee.LotNumber,
        JobCode = z.Employee.JobCode,
        FullName = z.Employee.FullName,
        EmployeeId = z.EmployeeId,
        PhoneNumber = z.PhoneNumber,
        ContactName = z.ContactName,
        LevelOfRelationshipId = z.LevelOfRelationshipId,
        LevelOfRelationshipName = z.LevelOfRelationship.Name,
    };

    public override Func<IQueryable<ContactInformation>, IOrderedQueryable<ContactInformation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetContactInformationViewModel>>> Handle(GetEmployeeContactInformationQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}