using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributesList;

public class GetAttributesListHandler: GetAllHandler<Attributes, GetAttributesListViewModel, GetAttributesListQuery>, IRequestHandler<GetAttributesListQuery, Response<IEnumerable<GetAttributesListViewModel>>>
{
    public GetAttributesListHandler(IBaseRepository<Attributes> repositoryAttributesList)
        : base(repositoryAttributesList) { }

    public override Expression<Func<Attributes, GetAttributesListViewModel>> Selector => z => new GetAttributesListViewModel()
    {
        Id = z.Id,
        Name = z.AttributeValue,
    };

    public override Func<IQueryable<Attributes>, IOrderedQueryable<Attributes>> OrderBy => order => order.OrderBy(z => z.Id);

    public async Task<Response<IEnumerable<GetAttributesListViewModel>>> Handle(GetAttributesListQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}