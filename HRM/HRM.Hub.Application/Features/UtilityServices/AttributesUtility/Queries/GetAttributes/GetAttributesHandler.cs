using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributes
{
    public class GetAttributesHandler : GetAllWithCountHandler<Attributes, GetAttributesViewModel, GetAttributesQuery>, IRequestHandler<GetAttributesQuery, Response<PagedResult<GetAttributesViewModel>>>
    {
        public GetAttributesHandler(IBaseRepository<Attributes> repositoryAttributes)
            : base(repositoryAttributes) { }

        public override Expression<Func<Attributes, GetAttributesViewModel>> Selector => z => new GetAttributesViewModel()
        {
            Id = z.Id,
            EmployeeId = z.EmployeeId,
            AttributeKey = z.AttributeKey,
            AttributeValue = z.AttributeValue,
            Status = z.StatusId,

        };

        public override Func<IQueryable<Attributes>, IOrderedQueryable<Attributes>> OrderBy => order => order.OrderBy(z => z.CreateAt);

        public async Task<Response<PagedResult<GetAttributesViewModel>>> Handle(GetAttributesQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
