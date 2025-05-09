using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyStatusUtility.Queries.GetStudyStatusList;

public class GetStudyStatusListHandler : GetAllHandler<StudyStatus, GetStudyStatusListViewModel, GetStudyStatusListQuery>, IRequestHandler<GetStudyStatusListQuery, Response<IEnumerable<GetStudyStatusListViewModel>>>
{
    public GetStudyStatusListHandler(IBaseRepository<StudyStatus> repositoryStudyStatusList)
        : base(repositoryStudyStatusList) { }

    public override Expression<Func<StudyStatus, GetStudyStatusListViewModel>> Selector => z => new GetStudyStatusListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<StudyStatus>, IOrderedQueryable<StudyStatus>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetStudyStatusListViewModel>>> Handle(GetStudyStatusListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}