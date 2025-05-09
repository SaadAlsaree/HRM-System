using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescription
{
    public class GetJobDescriptionHandler : GetAllWithCountHandler<JobDescription, GetJobDescriptionViewModel, GetJobDescriptionQuery>, IRequestHandler<GetJobDescriptionQuery, Response<PagedResult<GetJobDescriptionViewModel>>>
    {
        public GetJobDescriptionHandler(IBaseRepository<JobDescription> repositoryJobDescription)
            : base(repositoryJobDescription) { }

        public override Expression<Func<JobDescription, GetJobDescriptionViewModel>> Selector => z => new GetJobDescriptionViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<JobDescription>, IOrderedQueryable<JobDescription>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetJobDescriptionViewModel>>> Handle(GetJobDescriptionQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
