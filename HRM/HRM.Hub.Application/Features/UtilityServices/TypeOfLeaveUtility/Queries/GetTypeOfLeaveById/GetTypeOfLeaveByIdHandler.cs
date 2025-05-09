using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Queries.GetTypeOfLeaveById;
public class GetTypeOfLeaveByIdHandler : GetByIdHandler<TypeOfLeave, GetTypeOfLeaveByIdViewModel, GetTypeOfLeaveByIdQuery>, IRequestHandler<GetTypeOfLeaveByIdQuery, Response<GetTypeOfLeaveByIdViewModel>>
{
    public GetTypeOfLeaveByIdHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeave)
        : base(repositoryTypeOfLeave) { }

    public override Expression<Func<TypeOfLeave, bool>> IdPredicate(GetTypeOfLeaveByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<TypeOfLeave, GetTypeOfLeaveByIdViewModel>> Selector => a => new GetTypeOfLeaveByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name,
        
        Status = a.StatusId
    };
    public async Task<Response<GetTypeOfLeaveByIdViewModel>> Handle(GetTypeOfLeaveByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
