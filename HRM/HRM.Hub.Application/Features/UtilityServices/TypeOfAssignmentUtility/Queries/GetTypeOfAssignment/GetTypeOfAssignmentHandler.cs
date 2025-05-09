using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignment
{
    public class GetTypeOfAssignmentHandler : GetAllWithCountHandler<TypeOfAssignment, GetTypeOfAssignmentViewModel, GetTypeOfAssignmentQuery>, IRequestHandler<GetTypeOfAssignmentQuery, Response<PagedResult<GetTypeOfAssignmentViewModel>>>
    {
        public GetTypeOfAssignmentHandler(IBaseRepository<TypeOfAssignment> repositoryTypeOfAssignment)
            : base(repositoryTypeOfAssignment) { }

        public override Expression<Func<TypeOfAssignment, GetTypeOfAssignmentViewModel>> Selector => z => new GetTypeOfAssignmentViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<TypeOfAssignment>, IOrderedQueryable<TypeOfAssignment>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetTypeOfAssignmentViewModel>>> Handle(GetTypeOfAssignmentQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
