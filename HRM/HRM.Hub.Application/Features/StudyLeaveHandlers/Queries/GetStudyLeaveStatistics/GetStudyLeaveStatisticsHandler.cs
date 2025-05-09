namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveStatistics;

public class GetStudyLeaveStatisticsHandler : IRequestHandler<GetStudyLeaveStatisticsQuery, Response<GetStudyLeaveStatisticsViewModel>>
{
    private readonly IBaseRepository<StudyLeave> _repositoryStudyLeave;
    public GetStudyLeaveStatisticsHandler(IBaseRepository<StudyLeave> repositoryStudyLeave)
    {
        _repositoryStudyLeave = repositoryStudyLeave ?? throw new ArgumentNullException(nameof(repositoryStudyLeave));
    }


    public async Task<Response<GetStudyLeaveStatisticsViewModel>> Handle(GetStudyLeaveStatisticsQuery request, CancellationToken cancellationToken)
    {
        var query = _repositoryStudyLeave.GetQueryable();

        var type = query.Include(x => x.AcademicCertificateType)
            .Select(x => x.AcademicCertificateType.Name);

        //Todo: finish this statistics after getting more info
        var res = new GetStudyLeaveStatisticsViewModel()
        {
            StudyTypeList = await type.GroupBy(x => x).Select(x => new Tuple<string, int>(x.Key, x.Count())).ToListAsync(cancellationToken),
            StudyTypeCount = await type.CountAsync(cancellationToken),
        };



        return SuccessMessage.Get.ToSuccessMessage(res);

    }
}