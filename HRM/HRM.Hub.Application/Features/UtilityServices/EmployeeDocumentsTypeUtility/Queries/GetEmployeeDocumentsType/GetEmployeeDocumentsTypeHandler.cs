using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Queries.GetEmployeeDocumentsType
{
    public class GetEmployeeDocumentsTypeHandler : GetAllWithCountHandler<EmployeeDocumentsType, GetEmployeeDocumentsTypeViewModel, GetEmployeeDocumentsTypeQuery>, IRequestHandler<GetEmployeeDocumentsTypeQuery, Response<PagedResult<GetEmployeeDocumentsTypeViewModel>>>
    {
        public GetEmployeeDocumentsTypeHandler(IBaseRepository<EmployeeDocumentsType> repositoryEmployeeDocumentsType)
            : base(repositoryEmployeeDocumentsType) { }

        public override Expression<Func<EmployeeDocumentsType, GetEmployeeDocumentsTypeViewModel>> Selector => z => new GetEmployeeDocumentsTypeViewModel()
        {
            Id = z.Id,
            Name = z.Name,
            Status = z.StatusId,

        };

        public override Func<IQueryable<EmployeeDocumentsType>, IOrderedQueryable<EmployeeDocumentsType>> OrderBy => order => order.OrderBy(z => z.Id);

        public async Task<Response<PagedResult<GetEmployeeDocumentsTypeViewModel>>> Handle(GetEmployeeDocumentsTypeQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
