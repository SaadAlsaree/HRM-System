using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobDegreeUtility.Queries.GetJobDegree
{
    public class GetJobDegreeHandler : GetAllWithCountHandler<JobDegree, GetJobDegreeViewModel, GetJobDegreeQuery>, IRequestHandler<GetJobDegreeQuery, Response<PagedResult<GetJobDegreeViewModel>>>
    {
        public GetJobDegreeHandler(IBaseRepository<JobDegree> repositoryJobDegree)
            : base(repositoryJobDegree) { }

        public override Expression<Func<JobDegree, GetJobDegreeViewModel>> Selector => z => new GetJobDegreeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

            IncreaseAmount = z.IncreaseAmount,
        };

        public override Func<IQueryable<JobDegree>, IOrderedQueryable<JobDegree>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetJobDegreeViewModel>>> Handle(GetJobDegreeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

