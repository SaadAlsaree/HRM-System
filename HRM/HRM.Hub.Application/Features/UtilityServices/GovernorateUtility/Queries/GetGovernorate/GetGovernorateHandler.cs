using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorate
{
    public class GetGovernorateHandler : GetAllWithCountHandler<Governorate, GetGovernorateViewModel, GetGovernorateQuery>, IRequestHandler<GetGovernorateQuery, Response<PagedResult<GetGovernorateViewModel>>>
    {
        public GetGovernorateHandler(IBaseRepository<Governorate> repositoryGovernorate)
            : base(repositoryGovernorate) { }

        public override Expression<Func<Governorate, GetGovernorateViewModel>> Selector => z => new GetGovernorateViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Governorate>, IOrderedQueryable<Governorate>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetGovernorateViewModel>>> Handle(GetGovernorateQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

