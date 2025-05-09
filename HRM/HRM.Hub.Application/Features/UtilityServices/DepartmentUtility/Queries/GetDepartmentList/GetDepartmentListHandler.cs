using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartmentList;

public class GetDepartmentListHandler: GetAllHandler<Departments, GetDepartmentListViewModel, GetDepartmentListQuery>, IRequestHandler<GetDepartmentListQuery, Response<IEnumerable<GetDepartmentListViewModel>>>
{
    public GetDepartmentListHandler(IBaseRepository<Departments> repositoryDepartmentList)
        : base(repositoryDepartmentList) { }

    public override Expression<Func<Departments, GetDepartmentListViewModel>> Selector => z => new GetDepartmentListViewModel()
    {
        Id = z.Id,
        Name = z.Name,
    };

    public override Func<IQueryable<Departments>, IOrderedQueryable<Departments>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetDepartmentListViewModel>>> Handle(GetDepartmentListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}