using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Queries.GetGovernorateById;
public class GetGovernorateByIdHandler : GetByIdHandler<Governorate, GetGovernorateByIdViewModel, GetGovernorateByIdQuery>, IRequestHandler<GetGovernorateByIdQuery, Response<GetGovernorateByIdViewModel>>
{
    public GetGovernorateByIdHandler(IBaseRepository<Governorate> repositoryGovernorate)
        : base(repositoryGovernorate) { }

    public override Expression<Func<Governorate, bool>> IdPredicate(GetGovernorateByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Governorate, GetGovernorateByIdViewModel>> Selector => a => new GetGovernorateByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        Status = a.StatusId
    };
    public async Task<Response<GetGovernorateByIdViewModel>> Handle(GetGovernorateByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
