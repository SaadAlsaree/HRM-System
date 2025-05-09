namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformation;

public class GetMarriageInformationHandler : GetAllWithCountHandler<MarriageInformation, GetMarriageInformationViewModel, GetMarriageInformationQuery>, IRequestHandler<GetMarriageInformationQuery, Response<PagedResult<GetMarriageInformationViewModel>>>
{
    public GetMarriageInformationHandler(IBaseRepository<MarriageInformation> repositoryMarriageInformation)
        : base(repositoryMarriageInformation) { }

    public override Expression<Func<MarriageInformation, GetMarriageInformationViewModel>> Selector => z => new GetMarriageInformationViewModel()
    {
        Id = z.Id,
        EmployeeId = (Guid)z.EmployeeId,
        EmployeeName = z.Employee.FullName,
        FirstName = z.FirstName,
        SecondName = z.SecondName,
        ThirdName = z.ThirdName,
        SurName = z.SurName,
        FullName = z.FullName,
        MarriageDate = z.MarriageDate,
        ChildrenCount = z.ChildrenCount,
        IsCurrent = z.IsCurrent,
        Notes = z.Notes,
        Status = z.StatusId,

        JobCode = z.Employee.JobCode,
        LotNumber = z.Employee.JobCode,
        

    };

    public override Func<IQueryable<MarriageInformation>, IOrderedQueryable<MarriageInformation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetMarriageInformationViewModel>>> Handle(GetMarriageInformationQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}