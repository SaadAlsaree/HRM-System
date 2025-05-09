using System;
using System.Collections.Generic;

namespace HRM.Hub.Domain.Entities;

public class StudyLeave : BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }

    public Guid? StudyFileId { get; set; }

    public int? AcademicCertificateTypeId { get; set; }

    public int? AcademicAchievementId { get; set; }

    public int? AcademicFieldId { get; set; }

    public int? StudyPeriodTime { get; set; }

    public string AcceptanceYear { get; set; }

    public string NameOfIssuingCertificate { get; set; }

    public string FinancialInsuranceNo { get; set; }

    public DateOnly? FinancialInsuranceDate { get; set; }

    public DateOnly? ReleaseOrderDate { get; set; }

    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }

    public string HireOrderNo { get; set; }

    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }

    public int? CountryId { get; set; }

    public int? StudyStatusId { get; set; }

    public int? StudyResultId { get; set; }

    public string Notes { get; set; }

    

    public virtual AcademicAchievement AcademicAchievement { get; set; }

    public virtual AcademicCertificateType AcademicCertificateType { get; set; }

    public virtual AcademicField AcademicField { get; set; }

    

    public virtual Employees Employee { get; set; }

    public virtual StudyFile StudyFile { get; set; }

    public virtual StudyResult StudyResult { get; set; }

    public virtual StudyStatus StudyStatus { get; set; }
    public virtual Country Country { get; set; }
}
