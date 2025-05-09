using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;

public class UpdateAssignmentsCommend : IRequest<Response<bool>>
{
    [SwaggerIgnore]
    public Guid Id { get; set; }

    public Guid EmployeeId { get; set; }

    public int? TypeOfAssignmentId { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public AssignmentTypes AssignmentSite { get; set; }

    public string AssignedFromOrganization { get; set; }

    public string AssignedToOrganization { get; set; }

    public int? DurationOfAssignment { get; set; }

    public DateOnly? ReleaseOrderDate { get; set; }

    public string ReleaseOrderNo { get; set; }
    public DateOnly? AssignmentOrderDate { get; set; }
    public string AssignmentOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }
    public DateOnly? HireDate { get; set; }
    public string HireOrderNo { get; set; }
    public DateOnly? HireOrderDate { get; set; }

    public string EndOrderNo { get; set; }

    public DateOnly? EndOrderDate { get; set; }

    public DateOnly? EndReleaseOrderDate { get; set; }

    public string EndReleaseOrderNo { get; set; }

    public string EndHireNo { get; set; }

    public DateOnly? EndHireDate { get; set; }

    public string Note { get; set; }
    public Guid? LastUpdateBy { get; set; }
}
