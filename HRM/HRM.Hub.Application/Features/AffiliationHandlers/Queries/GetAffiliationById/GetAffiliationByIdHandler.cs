
namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.GetAffiliationById;

public class GetAffiliationByIdHandler : IRequestHandler<GetAffiliationByIdQuery,
    Response<GetAffiliationByIdViewModel>>
{
    private readonly IBaseRepository<Domain.Entities.Affiliation> _repositoryAffiliation;

    public GetAffiliationByIdHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
    {
        _repositoryAffiliation = repositoryAffiliation ??
                                         throw new ArgumentNullException(nameof(repositoryAffiliation));
    }

    public async Task<Response<GetAffiliationByIdViewModel>> Handle(GetAffiliationByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryAffiliation
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetAffiliationByIdViewModel()
            {
                EmployeeId = a.EmployeeId,
                FullName = a.Employee.FullName,
                Id = a.Id,
                JobCode = a.Employee.JobCode,
                TypeOfAssignmentId = a.TypeOfAssignmentId,
                TypeOfAssignmentName = a.TypeOfAssignment.Name,
                OrderNo = a.OrderNo,
                OrderDate = a.OrderDate,
                IssuingAuthority = a.IssuingAuthority,
                Ministry = a.Ministry,
                AssignmentSite = a.AssignmentSite,
                OriginalEntity = a.OriginalEntity,
                ReasonForJoining = a.ReasonForJoining,
                DurationMonths = a.DurationMonths,
                FromDate = a.FromDate,
                ToDate = a.ToDate,
                RenewalCount = a.RenewalCount,
                MaxRenewals = a.MaxRenewals,
                ReleaseOrderDate = a.ReleaseOrderDate,
                ReleaseOrderNo = a.ReleaseOrderNo,
                ReleaseDate = a.ReleaseDate,
                EndOrderNo = a.EndOrderNo,
                EndOrderDate = a.EndOrderDate,
                Note = a.Note,
                Status = a.StatusId,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}
