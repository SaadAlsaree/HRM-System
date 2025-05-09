using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderTypeList;

public class GetStudyExtensionOrderTypeListHandler : GetAllHandler<StudyExtensionOrderType, GetStudyExtensionOrderTypeListViewModel, GetStudyExtensionOrderTypeListQuery>, IRequestHandler<GetStudyExtensionOrderTypeListQuery, Response<IEnumerable<GetStudyExtensionOrderTypeListViewModel>>>
{
    public GetStudyExtensionOrderTypeListHandler(IBaseRepository<StudyExtensionOrderType> repositoryStudyExtensionOrderTypeList)
        : base(repositoryStudyExtensionOrderTypeList) { }

    public override Expression<Func<StudyExtensionOrderType, GetStudyExtensionOrderTypeListViewModel>> Selector => z => new GetStudyExtensionOrderTypeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<StudyExtensionOrderType>, IOrderedQueryable<StudyExtensionOrderType>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetStudyExtensionOrderTypeListViewModel>>> Handle(GetStudyExtensionOrderTypeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}