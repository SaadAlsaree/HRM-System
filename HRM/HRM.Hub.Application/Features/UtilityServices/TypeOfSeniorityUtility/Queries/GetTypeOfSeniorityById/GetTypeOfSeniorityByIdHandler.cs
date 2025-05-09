using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Queries.GetTypeOfSeniorityById;
public class GetTypeOfSeniorityByIdHandler : GetByIdHandler<TypeOfSeniority, GetTypeOfSeniorityByIdViewModel, GetTypeOfSeniorityByIdQuery>, IRequestHandler<GetTypeOfSeniorityByIdQuery, Response<GetTypeOfSeniorityByIdViewModel>>
{
    public GetTypeOfSeniorityByIdHandler(IBaseRepository<TypeOfSeniority> repositoryTypeOfSeniority)
        : base(repositoryTypeOfSeniority) { }

    public override Expression<Func<TypeOfSeniority, bool>> IdPredicate(GetTypeOfSeniorityByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfSeniority, GetTypeOfSeniorityByIdViewModel>> Selector => a => new GetTypeOfSeniorityByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfSeniorityByIdViewModel>> Handle(GetTypeOfSeniorityByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
