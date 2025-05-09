using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.AttributesUtility.Queries.GetAttributesById;
public class GetAttributesByIdHandler : GetByIdHandler<Attributes, GetAttributesByIdViewModel, GetAttributesByIdQuery>, IRequestHandler<GetAttributesByIdQuery, Response<GetAttributesByIdViewModel>>
{
    public GetAttributesByIdHandler(IBaseRepository<Attributes> repositoryAttributes)
        : base(repositoryAttributes) { }

    public override Expression<Func<Attributes, bool>> IdPredicate(GetAttributesByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Attributes, GetAttributesByIdViewModel>> Selector => a => new GetAttributesByIdViewModel()
    {
        Id = a.Id,
        Name = a.AttributeValue,
        
        Status = a.StatusId
    };
    public async Task<Response<GetAttributesByIdViewModel>> Handle(GetAttributesByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
