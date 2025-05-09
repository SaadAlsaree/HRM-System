using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLaw
{
    public class GetLawHandler : GetAllWithCountHandler<Laws, GetLawViewModel, GetLawQuery>, IRequestHandler<GetLawQuery, Response<PagedResult<GetLawViewModel>>>
    {
        public GetLawHandler(IBaseRepository<Laws> repositoryLaw)
            : base(repositoryLaw) { }

        public override Expression<Func<Laws, GetLawViewModel>> Selector => z => new GetLawViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Laws>, IOrderedQueryable<Laws>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetLawViewModel>>> Handle(GetLawQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
