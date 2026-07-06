
namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliations;

public class GetAffiliationsHandler : GetAllWithCountHandler<Domain.Entities.Affiliation, GetAffiliationsViewModel, GetAffiliationsQuery>, IRequestHandler<GetAffiliationsQuery, Response<PagedResult<GetAffiliationsViewModel>>>
{
    public GetAffiliationsHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
        : base(repositoryAffiliation) { }

    public override Expression<Func<Domain.Entities.Affiliation, GetAffiliationsViewModel>> Selector => z => new GetAffiliationsViewModel()
    {
        Id = z.Id,
        EmployeeId = z.EmployeeId,
        FullName = z.Employee.FullName,
        JobCode = z.Employee.JobCode,
        TypeOfAssignmentId = z.TypeOfAssignmentId,
        TypeOfAssignmentName = z.TypeOfAssignment.Name,
        OrderNo = z.OrderNo,
        OrderDate = z.OrderDate,
        IssuingAuthority = z.IssuingAuthority,
        Ministry = z.Ministry,
        AssignmentSite = z.AssignmentSite,
        OriginalEntity = z.OriginalEntity,
        ReasonForJoining = z.ReasonForJoining,
        DurationMonths = z.DurationMonths,
        FromDate = z.FromDate,
        ToDate = z.ToDate,
        RenewalCount = z.RenewalCount,
        MaxRenewals = z.MaxRenewals,
        ReleaseOrderDate = z.ReleaseOrderDate,
        ReleaseOrderNo = z.ReleaseOrderNo,
        ReleaseDate = z.ReleaseDate,
        EndOrderNo = z.EndOrderNo,
        EndOrderDate = z.EndOrderDate,
        Note = z.Note,
        Status = z.StatusId
    };

    public override Func<IQueryable<Domain.Entities.Affiliation>, IOrderedQueryable<Domain.Entities.Affiliation>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<PagedResult<GetAffiliationsViewModel>>> Handle(GetAffiliationsQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
