using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessType
{
    public class GetSicknessTypeHandler : GetAllWithCountHandler<SicknessType, GetSicknessTypeViewModel, GetSicknessTypeQuery>, IRequestHandler<GetSicknessTypeQuery, Response<PagedResult<GetSicknessTypeViewModel>>>
    {
        public GetSicknessTypeHandler(IBaseRepository<SicknessType> repositorySicknessType)
            : base(repositorySicknessType) { }

        public override Expression<Func<SicknessType, GetSicknessTypeViewModel>> Selector => z => new GetSicknessTypeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<SicknessType>, IOrderedQueryable<SicknessType>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetSicknessTypeViewModel>>> Handle(GetSicknessTypeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
