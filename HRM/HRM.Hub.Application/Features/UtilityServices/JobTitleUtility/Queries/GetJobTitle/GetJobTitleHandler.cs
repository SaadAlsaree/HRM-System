

using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitle
{
    public class GetJobTitleHandler : GetAllWithCountHandler<JobTitle, GetJobTitleViewModel, GetJobTitleQuery>, IRequestHandler<GetJobTitleQuery, Response<PagedResult<GetJobTitleViewModel>>>
    {
        public GetJobTitleHandler(IBaseRepository<JobTitle> repositoryJobTitle)
            : base(repositoryJobTitle) { }

        public override Expression<Func<JobTitle, GetJobTitleViewModel>> Selector => z => new GetJobTitleViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            DegreeId = z.DegreeId,
            DegreeName = z.Degree.Name,
            Status = z.StatusId,
            
        };

        public override Func<IQueryable<JobTitle>, IOrderedQueryable<JobTitle>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetJobTitleViewModel>>> Handle(GetJobTitleQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
