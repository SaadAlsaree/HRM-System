using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.ProvinceUtility.Queries.GetProvince
{
    public class GetProvinceHandler : GetAllWithCountHandler<Province, GetProvinceViewModel, GetProvinceQuery>, IRequestHandler<GetProvinceQuery, Response<PagedResult<GetProvinceViewModel>>>
    {
        public GetProvinceHandler(IBaseRepository<Province> repositoryProvince)
            : base(repositoryProvince) { }

        public override Expression<Func<Province, GetProvinceViewModel>> Selector => z => new GetProvinceViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Province>, IOrderedQueryable<Province>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetProvinceViewModel>>> Handle(GetProvinceQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
