using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Queries.GetLawById;
public class GetLawByIdHandler : GetByIdHandler<Laws, GetLawByIdViewModel, GetLawByIdQuery>, IRequestHandler<GetLawByIdQuery, Response<GetLawByIdViewModel>>
{
    public GetLawByIdHandler(IBaseRepository<Laws> repositoryLaw)
        : base(repositoryLaw) { }

    public override Expression<Func<Laws, bool>> IdPredicate(GetLawByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<Laws, GetLawByIdViewModel>> Selector => a => new GetLawByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetLawByIdViewModel>> Handle(GetLawByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
