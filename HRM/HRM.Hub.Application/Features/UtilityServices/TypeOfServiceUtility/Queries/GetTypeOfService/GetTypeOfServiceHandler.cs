using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Queries.GetTypeOfService
{
    public class GetTypeOfServiceHandler : GetAllWithCountHandler<TypeOfService, GetTypeOfServiceViewModel, GetTypeOfServiceQuery>, IRequestHandler<GetTypeOfServiceQuery, Response<PagedResult<GetTypeOfServiceViewModel>>>
    {
        public GetTypeOfServiceHandler(IBaseRepository<TypeOfService> repositoryTypeOfService)
            : base(repositoryTypeOfService) { }

        public override Expression<Func<TypeOfService, GetTypeOfServiceViewModel>> Selector => z => new GetTypeOfServiceViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfService>, IOrderedQueryable<TypeOfService>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfServiceViewModel>>> Handle(GetTypeOfServiceQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
