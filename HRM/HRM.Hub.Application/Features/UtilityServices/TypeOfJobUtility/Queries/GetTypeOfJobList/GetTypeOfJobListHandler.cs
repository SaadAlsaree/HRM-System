using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJobList;

public class GetTypeOfJobListHandler : GetAllHandler<TypeOfJob, GetTypeOfJobListViewModel, GetTypeOfJobListQuery>, IRequestHandler<GetTypeOfJobListQuery, Response<IEnumerable<GetTypeOfJobListViewModel>>>
{
    public GetTypeOfJobListHandler(IBaseRepository<TypeOfJob> repositoryTypeOfJobList)
        : base(repositoryTypeOfJobList) { }

    public override Expression<Func<TypeOfJob, GetTypeOfJobListViewModel>> Selector => z => new GetTypeOfJobListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfJob>, IOrderedQueryable<TypeOfJob>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfJobListViewModel>>> Handle(GetTypeOfJobListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}