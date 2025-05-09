using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeave
{
    public class GetTypeOfLeaveHandler : GetAllWithCountHandler<TypeOfLeave, GetTypeOfLeaveViewModel, GetTypeOfLeaveQuery>, IRequestHandler<GetTypeOfLeaveQuery, Response<PagedResult<GetTypeOfLeaveViewModel>>>
    {
        public GetTypeOfLeaveHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeave)
            : base(repositoryTypeOfLeave) { }

        public override Expression<Func<TypeOfLeave, GetTypeOfLeaveViewModel>> Selector => z => new GetTypeOfLeaveViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfLeave>, IOrderedQueryable<TypeOfLeave>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfLeaveViewModel>>> Handle(GetTypeOfLeaveQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
