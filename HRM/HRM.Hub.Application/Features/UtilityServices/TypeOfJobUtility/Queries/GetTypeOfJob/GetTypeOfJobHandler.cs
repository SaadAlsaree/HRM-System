using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfJobUtility.Queries.GetTypeOfJob
{
    public class GetTypeOfJobHandler : GetAllWithCountHandler<TypeOfJob, GetTypeOfJobViewModel, GetTypeOfJobQuery>, IRequestHandler<GetTypeOfJobQuery, Response<PagedResult<GetTypeOfJobViewModel>>>
    {
        public GetTypeOfJobHandler(IBaseRepository<TypeOfJob> repositoryTypeOfJob)
            : base(repositoryTypeOfJob) { }

        public override Expression<Func<TypeOfJob, GetTypeOfJobViewModel>> Selector => z => new GetTypeOfJobViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfJob>, IOrderedQueryable<TypeOfJob>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfJobViewModel>>> Handle(GetTypeOfJobQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
