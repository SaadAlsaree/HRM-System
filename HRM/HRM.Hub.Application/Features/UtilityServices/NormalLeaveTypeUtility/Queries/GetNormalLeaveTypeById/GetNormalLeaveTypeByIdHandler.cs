using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.UtilityServices.NormalLeaveTypeUtility.Queries.GetNormalLeaveTypeById;
public class GetNormalLeaveTypeByIdHandler : GetByIdHandler<NormalLeaveType, GetNormalLeaveTypeByIdViewModel, GetNormalLeaveTypeByIdQuery>, IRequestHandler<GetNormalLeaveTypeByIdQuery, Response<GetNormalLeaveTypeByIdViewModel>>
{
    public GetNormalLeaveTypeByIdHandler(IBaseRepository<NormalLeaveType> repositoryNormalLeaveType)
        : base(repositoryNormalLeaveType) { }

    public override Expression<Func<NormalLeaveType, bool>> IdPredicate(GetNormalLeaveTypeByIdQuery request) => x => x.Id == request.Id;
    public override Expression<Func<NormalLeaveType, GetNormalLeaveTypeByIdViewModel>> Selector => a => new GetNormalLeaveTypeByIdViewModel()
    {
        Id = a.Id,
        Name = a.Name
    };
    public async Task<Response<GetNormalLeaveTypeByIdViewModel>> Handle(GetNormalLeaveTypeByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}
