using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobDescriptionUtility.Queries.GetJobDescriptionList;

public class GetJobDescriptionListHandler : GetAllHandler<JobDescription, GetJobDescriptionListViewModel, GetJobDescriptionListQuery>, IRequestHandler<GetJobDescriptionListQuery, Response<IEnumerable<GetJobDescriptionListViewModel>>>
{
    public GetJobDescriptionListHandler(IBaseRepository<JobDescription> repositoryJobDescriptionList)
        : base(repositoryJobDescriptionList) { }

    public override Expression<Func<JobDescription, GetJobDescriptionListViewModel>> Selector => z => new GetJobDescriptionListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<JobDescription>, IOrderedQueryable<JobDescription>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetJobDescriptionListViewModel>>> Handle(GetJobDescriptionListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}