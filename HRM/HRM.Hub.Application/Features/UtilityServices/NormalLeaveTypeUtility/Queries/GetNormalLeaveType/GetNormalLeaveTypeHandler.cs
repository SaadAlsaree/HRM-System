using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveType
{
    public class GetNormalLeaveTypeHandler : GetAllWithCountHandler<NormalLeaveType, GetNormalLeaveTypeViewModel, GetNormalLeaveTypeQuery>, IRequestHandler<GetNormalLeaveTypeQuery, Response<PagedResult<GetNormalLeaveTypeViewModel>>>
    {
        public GetNormalLeaveTypeHandler(IBaseRepository<NormalLeaveType> repositoryNormalLeaveType)
            : base(repositoryNormalLeaveType) { }

        public override Expression<Func<NormalLeaveType, GetNormalLeaveTypeViewModel>> Selector => z => new GetNormalLeaveTypeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<NormalLeaveType>, IOrderedQueryable<NormalLeaveType>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetNormalLeaveTypeViewModel>>> Handle(GetNormalLeaveTypeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
