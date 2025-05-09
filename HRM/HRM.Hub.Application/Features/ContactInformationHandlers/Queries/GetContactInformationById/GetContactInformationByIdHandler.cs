namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetContactInformationById;

public class GetContactInformationByIdHandler : GetByIdHandler<ContactInformation, GetContactInformationByIdViewModel, GetContactInformationByIdQuery>, IRequestHandler<GetContactInformationByIdQuery, Response<GetContactInformationByIdViewModel>>
{
    public GetContactInformationByIdHandler(IBaseRepository<ContactInformation> repositoryEmployeeContactInformation)
        : base(repositoryEmployeeContactInformation) { }

    public override Expression<Func<ContactInformation, bool>> IdPredicate(GetContactInformationByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<ContactInformation, GetContactInformationByIdViewModel>> Selector => z => new GetContactInformationByIdViewModel()
    {
        Id = z.Id,
        Notes = z.Notes,
        FullName = z.Employee.FullName,
        EmployeeId = z.EmployeeId,
        JobCode = z.Employee.JobCode,
        Status = z.StatusId,
        ContactName = z.ContactName,
        LevelOfRelationshipId = z.LevelOfRelationshipId,
        LevelOfRelationshipName = z.LevelOfRelationship.Name,
        PhoneNumber = z.PhoneNumber,

    };
    public async Task<Response<GetContactInformationByIdViewModel>> Handle(GetContactInformationByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}