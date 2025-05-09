using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatus
{
    public class GetStudyStatusHandler : GetAllWithCountHandler<StudyStatus, GetStudyStatusViewModel, GetStudyStatusQuery>, IRequestHandler<GetStudyStatusQuery, Response<PagedResult<GetStudyStatusViewModel>>>
    {
        public GetStudyStatusHandler(IBaseRepository<StudyStatus> repositoryStudyStatus)
            : base(repositoryStudyStatus) { }

        public override Expression<Func<StudyStatus, GetStudyStatusViewModel>> Selector => z => new GetStudyStatusViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<StudyStatus>, IOrderedQueryable<StudyStatus>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetStudyStatusViewModel>>> Handle(GetStudyStatusQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
