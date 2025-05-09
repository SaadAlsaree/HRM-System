using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.PositionUtility.Queries.GetPositionById;
public class GetPositionByIdHandler : GetByIdHandler<Position, GetPositionByIdViewModel, GetPositionByIdQuery>, IRequestHandler<GetPositionByIdQuery, Response<GetPositionByIdViewModel>>
{
    public GetPositionByIdHandler(IBaseRepository<Position> repositoryPosition)
        : base(repositoryPosition) { }

    public override Expression<Func<Position, bool>> IdPredicate(GetPositionByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Position, GetPositionByIdViewModel>> Selector => a => new GetPositionByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetPositionByIdViewModel>> Handle(GetPositionByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
