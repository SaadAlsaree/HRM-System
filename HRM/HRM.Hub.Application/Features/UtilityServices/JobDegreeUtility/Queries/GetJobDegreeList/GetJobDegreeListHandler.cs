using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegreeList;

public class GetJobDegreeListHandler: GetAllHandler<JobDegree, GetJobDegreeListViewModel, GetJobDegreeListQuery>, IRequestHandler<GetJobDegreeListQuery, Response<IEnumerable<GetJobDegreeListViewModel>>>
{
    public GetJobDegreeListHandler(IBaseRepository<JobDegree> repositoryJobDegreeList)
        : base(repositoryJobDegreeList) { }

    public override Expression<Func<JobDegree, GetJobDegreeListViewModel>> Selector => z => new GetJobDegreeListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<JobDegree>, IOrderedQueryable<JobDegree>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetJobDegreeListViewModel>>> Handle(GetJobDegreeListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}