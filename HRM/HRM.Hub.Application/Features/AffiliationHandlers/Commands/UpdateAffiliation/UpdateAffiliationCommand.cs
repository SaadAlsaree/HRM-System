using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.UpdateAffiliation;

public class UpdateAffiliationCommand : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public Guid EmployeeId { get; set; }

    public int? TypeOfAssignmentId { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public string IssuingAuthority { get; set; }

    public string Ministry { get; set; }

    public AffiliationSite AssignmentSite { get; set; }

    public string OriginalEntity { get; set; }

    public string ReasonForJoining { get; set; }

    public int? DurationMonths { get; set; }

    public DateOnly? FromDate { get; set; }

    public DateOnly? ToDate { get; set; }

    public int? MaxRenewals { get; set; }

    public DateOnly? ReleaseOrderDate { get; set; }

    public string ReleaseOrderNo { get; set; }

    public DateOnly? ReleaseDate { get; set; }

    public string EndOrderNo { get; set; }

    public DateOnly? EndOrderDate { get; set; }

    public string Note { get; set; }

    public Guid? LastUpdateBy { get; set; }
}
