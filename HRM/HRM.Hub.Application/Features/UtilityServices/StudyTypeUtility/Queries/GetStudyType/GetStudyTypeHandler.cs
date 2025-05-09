using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.StudyTypeUtility.Queries.GetStudyType
{
    public class GetStudyTypeHandler : GetAllWithCountHandler<StudyType, GetStudyTypeViewModel, GetStudyTypeQuery>, IRequestHandler<GetStudyTypeQuery, Response<PagedResult<GetStudyTypeViewModel>>>
    {
        public GetStudyTypeHandler(IBaseRepository<StudyType> repositoryStudyType)
            : base(repositoryStudyType) { }

        public override Expression<Func<StudyType, GetStudyTypeViewModel>> Selector => z => new GetStudyTypeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<StudyType>, IOrderedQueryable<StudyType>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetStudyTypeViewModel>>> Handle(GetStudyTypeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
