using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategoryList;

public class GetJobCategoryListHandler : GetAllHandler<JobCategory, GetJobCategoryListViewModel, GetJobCategoryListQuery>, IRequestHandler<GetJobCategoryListQuery, Response<IEnumerable<GetJobCategoryListViewModel>>>
{
    public GetJobCategoryListHandler(IBaseRepository<JobCategory> repositoryJobCategoryList)
        : base(repositoryJobCategoryList) { }

    public override Expression<Func<JobCategory, GetJobCategoryListViewModel>> Selector => z => new GetJobCategoryListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<JobCategory>, IOrderedQueryable<JobCategory>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetJobCategoryListViewModel>>> Handle(GetJobCategoryListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}