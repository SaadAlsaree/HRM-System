using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Queries.GetTypeOfAssignmentList;

public class GetTypeOfAssignmentListHandler : GetAllHandler<TypeOfAssignment, GetTypeOfAssignmentListViewModel, GetTypeOfAssignmentListQuery>, IRequestHandler<GetTypeOfAssignmentListQuery, Response<IEnumerable<GetTypeOfAssignmentListViewModel>>>
{
    public GetTypeOfAssignmentListHandler(IBaseRepository<TypeOfAssignment> repositoryTypeOfAssignmentList)
        : base(repositoryTypeOfAssignmentList) { }

    public override Expression<Func<TypeOfAssignment, GetTypeOfAssignmentListViewModel>> Selector => z => new GetTypeOfAssignmentListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<TypeOfAssignment>, IOrderedQueryable<TypeOfAssignment>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetTypeOfAssignmentListViewModel>>> Handle(GetTypeOfAssignmentListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}