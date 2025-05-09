using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Queries.GetTypeOfBookList;

public class GetTypeOfBookListHandler : GetAllHandler<TypeOfBook, GetTypeOfBookListViewModel, GetTypeOfBookListQuery>, IRequestHandler<GetTypeOfBookListQuery, Response<IEnumerable<GetTypeOfBookListViewModel>>>
{
    public GetTypeOfBookListHandler(IBaseRepository<TypeOfBook> repositoryTypeOfBookList)
        : base(repositoryTypeOfBookList) { }

    public override Expression<Func<TypeOfBook, GetTypeOfBookListViewModel>> Selector => z => new GetTypeOfBookListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfBook>, IOrderedQueryable<TypeOfBook>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfBookListViewModel>>> Handle(GetTypeOfBookListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}