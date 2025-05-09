using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniorityList;

public class GetTypeOfSeniorityListHandler : GetAllHandler<TypeOfSeniority, GetTypeOfSeniorityListViewModel, GetTypeOfSeniorityListQuery>, IRequestHandler<GetTypeOfSeniorityListQuery, Response<IEnumerable<GetTypeOfSeniorityListViewModel>>>
{
    public GetTypeOfSeniorityListHandler(IBaseRepository<TypeOfSeniority> repositoryTypeOfSeniorityList)
        : base(repositoryTypeOfSeniorityList) { }

    public override Expression<Func<TypeOfSeniority, GetTypeOfSeniorityListViewModel>> Selector => z => new GetTypeOfSeniorityListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfSeniority>, IOrderedQueryable<TypeOfSeniority>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfSeniorityListViewModel>>> Handle(GetTypeOfSeniorityListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}