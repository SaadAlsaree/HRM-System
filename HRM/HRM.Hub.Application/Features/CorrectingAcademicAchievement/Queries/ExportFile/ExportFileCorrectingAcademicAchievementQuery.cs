namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.ExportFile;
public class ExportFileCorrectingAcademicAchievementQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
    public Status Status { get; set; }
    public bool IsCertificateCalculationTerm { get; set; }
}