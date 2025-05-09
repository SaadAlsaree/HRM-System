using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobCategoryUtility.Queries.GetJobCategory
{
    public class GetJobCategoryHandler : GetAllWithCountHandler<JobCategory, GetJobCategoryViewModel, GetJobCategoryQuery>, IRequestHandler<GetJobCategoryQuery, Response<PagedResult<GetJobCategoryViewModel>>>
    {
        public GetJobCategoryHandler(IBaseRepository<JobCategory> repositoryJobCategory)
            : base(repositoryJobCategory) { }

        public override Expression<Func<JobCategory, GetJobCategoryViewModel>> Selector => z => new GetJobCategoryViewModel()
        {
            Id = z.Id,
            DegreeId = z.DegreeId,
            DegreeName = z.Degree.Name,
            IncreaseAmount = z.IncreaseAmount,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<JobCategory>, IOrderedQueryable<JobCategory>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetJobCategoryViewModel>>> Handle(GetJobCategoryQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}

