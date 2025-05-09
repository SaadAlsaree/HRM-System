using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniority
{
    public class GetTypeOfSeniorityHandler : GetAllWithCountHandler<TypeOfSeniority, GetTypeOfSeniorityViewModel, GetTypeOfSeniorityQuery>, IRequestHandler<GetTypeOfSeniorityQuery, Response<PagedResult<GetTypeOfSeniorityViewModel>>>
    {
        public GetTypeOfSeniorityHandler(IBaseRepository<TypeOfSeniority> repositoryTypeOfSeniority)
            : base(repositoryTypeOfSeniority) { }

        public override Expression<Func<TypeOfSeniority, GetTypeOfSeniorityViewModel>> Selector => z => new GetTypeOfSeniorityViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfSeniority>, IOrderedQueryable<TypeOfSeniority>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfSeniorityViewModel>>> Handle(GetTypeOfSeniorityQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
