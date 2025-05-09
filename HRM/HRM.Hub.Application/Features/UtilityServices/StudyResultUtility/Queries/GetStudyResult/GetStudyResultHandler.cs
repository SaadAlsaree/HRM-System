using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResult
{
    public class GetStudyResultHandler : GetAllWithCountHandler<StudyResult, GetStudyResultViewModel, GetStudyResultQuery>, IRequestHandler<GetStudyResultQuery, Response<PagedResult<GetStudyResultViewModel>>>
    {
        public GetStudyResultHandler(IBaseRepository<StudyResult> repositoryStudyResult)
            : base(repositoryStudyResult) { }

        public override Expression<Func<StudyResult, GetStudyResultViewModel>> Selector => z => new GetStudyResultViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<StudyResult>, IOrderedQueryable<StudyResult>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetStudyResultViewModel>>> Handle(GetStudyResultQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
