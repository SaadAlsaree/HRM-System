using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBook
{
    public class GetTypeOfBookHandler : GetAllWithCountHandler<TypeOfBook, GetTypeOfBookViewModel, GetTypeOfBookQuery>, IRequestHandler<GetTypeOfBookQuery, Response<PagedResult<GetTypeOfBookViewModel>>>
    {
        public GetTypeOfBookHandler(IBaseRepository<TypeOfBook> repositoryTypeOfBook)
            : base(repositoryTypeOfBook) { }

        public override Expression<Func<TypeOfBook, GetTypeOfBookViewModel>> Selector => z => new GetTypeOfBookViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfBook>, IOrderedQueryable<TypeOfBook>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfBookViewModel>>> Handle(GetTypeOfBookQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

