using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyResultUtility.Queries.GetStudyResultList;

public class GetStudyResultListHandler : GetAllHandler<StudyResult, GetStudyResultListViewModel, GetStudyResultListQuery>, IRequestHandler<GetStudyResultListQuery, Response<IEnumerable<GetStudyResultListViewModel>>>
{
    public GetStudyResultListHandler(IBaseRepository<StudyResult> repositoryStudyResultList)
        : base(repositoryStudyResultList) { }

    public override Expression<Func<StudyResult, GetStudyResultListViewModel>> Selector => z => new GetStudyResultListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<StudyResult>, IOrderedQueryable<StudyResult>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetStudyResultListViewModel>>> Handle(GetStudyResultListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}