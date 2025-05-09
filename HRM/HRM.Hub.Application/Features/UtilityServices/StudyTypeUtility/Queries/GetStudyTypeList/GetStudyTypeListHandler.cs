using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyTypeList;

public class GetStudyTypeListHandler : GetAllHandler<StudyType, GetStudyTypeListViewModel, GetStudyTypeListQuery>, IRequestHandler<GetStudyTypeListQuery, Response<IEnumerable<GetStudyTypeListViewModel>>>
{
    public GetStudyTypeListHandler(IBaseRepository<StudyType> repositoryStudyTypeList)
        : base(repositoryStudyTypeList) { }

    public override Expression<Func<StudyType, GetStudyTypeListViewModel>> Selector => z => new GetStudyTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<StudyType>, IOrderedQueryable<StudyType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetStudyTypeListViewModel>>> Handle(GetStudyTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}