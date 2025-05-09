using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyExtensionOrderTypeUtility.Queries.GetStudyExtensionOrderType
{
    public class GetStudyExtensionOrderTypeHandler : GetAllWithCountHandler<StudyExtensionOrderType, GetStudyExtensionOrderTypeViewModel, GetStudyExtensionOrderTypeQuery>, IRequestHandler<GetStudyExtensionOrderTypeQuery, Response<PagedResult<GetStudyExtensionOrderTypeViewModel>>>
    {
        public GetStudyExtensionOrderTypeHandler(IBaseRepository<StudyExtensionOrderType> repositoryStudyExtensionOrderType)
            : base(repositoryStudyExtensionOrderType) { }

        public override Expression<Func<StudyExtensionOrderType, GetStudyExtensionOrderTypeViewModel>> Selector => z => new GetStudyExtensionOrderTypeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<StudyExtensionOrderType>, IOrderedQueryable<StudyExtensionOrderType>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetStudyExtensionOrderTypeViewModel>>> Handle(GetStudyExtensionOrderTypeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
