namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Queries.GetDepartment
{
    public class GetDepartmentHandler : GetAllWithCountHandler<Departments, GetDepartmentViewModel, GetDepartmentQuery>, IRequestHandler<GetDepartmentQuery, Response<PagedResult<GetDepartmentViewModel>>>
    {
        public GetDepartmentHandler(IBaseRepository<Departments> repositoryDepartment)
            : base(repositoryDepartment) { }

        public override Expression<Func<Departments, GetDepartmentViewModel>> Selector => z => new GetDepartmentViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

            ShortKey = z.ShortKey.ToString(),
            DirectorateId = z.DirectorateId ?? 0,
            SubDirectorateId = z.SubDirectorateId ?? 0,
            DirectorateName = z.Directorate.Name,
            SubDirectorateName = z.SubDirectorate.Name,
        };

        public override Func<IQueryable<Departments>, IOrderedQueryable<Departments>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetDepartmentViewModel>>> Handle(GetDepartmentQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
