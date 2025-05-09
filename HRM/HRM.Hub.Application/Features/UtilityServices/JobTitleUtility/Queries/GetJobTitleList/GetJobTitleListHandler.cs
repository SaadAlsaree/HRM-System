using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.JobTitleUtility.Queries.GetJobTitleList;

public class GetJobTitleListHandler : GetAllHandler<JobTitle, GetJobTitleListViewModel, GetJobTitleListQuery>, IRequestHandler<GetJobTitleListQuery, Response<IEnumerable<GetJobTitleListViewModel>>>
{
    public GetJobTitleListHandler(IBaseRepository<JobTitle> repositoryJobTitleList)
        : base(repositoryJobTitleList) { }

    public override Expression<Func<JobTitle, GetJobTitleListViewModel>> Selector => z => new GetJobTitleListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<JobTitle>, IOrderedQueryable<JobTitle>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetJobTitleListViewModel>>> Handle(GetJobTitleListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}