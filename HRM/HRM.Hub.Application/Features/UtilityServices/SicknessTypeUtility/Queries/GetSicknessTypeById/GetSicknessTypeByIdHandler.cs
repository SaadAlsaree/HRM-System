using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.SicknessTypeUtility.Queries.GetSicknessTypeById;
public class GetSicknessTypeByIdHandler : GetByIdHandler<SicknessType, GetSicknessTypeByIdViewModel, GetSicknessTypeByIdQuery>, IRequestHandler<GetSicknessTypeByIdQuery, Response<GetSicknessTypeByIdViewModel>>
{
    public GetSicknessTypeByIdHandler(IBaseRepository<SicknessType> repositorySicknessType)
        : base(repositorySicknessType) { }

    public override Expression<Func<SicknessType, bool>> IdPredicate(GetSicknessTypeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<SicknessType, GetSicknessTypeByIdViewModel>> Selector => a => new GetSicknessTypeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
    };
    public async Task<Response<GetSicknessTypeByIdViewModel>> Handle(GetSicknessTypeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
