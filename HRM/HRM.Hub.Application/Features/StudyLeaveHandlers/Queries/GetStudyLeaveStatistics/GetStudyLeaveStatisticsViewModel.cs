namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveStatistics;

public class GetStudyLeaveStatisticsViewModel
{
    public int CertificateTypeCount { get; set; }
    public int StudyTypeCount { get; set; }
    public int StopCount { get; set; }

    public IEnumerable<(string key,int Value)> CertificateTypeList { get; set; }
    public IEnumerable<Tuple<string, int>> StudyTypeList { get; set; }
    public IEnumerable<(string key,int Value)> StopList { get; set; }
}