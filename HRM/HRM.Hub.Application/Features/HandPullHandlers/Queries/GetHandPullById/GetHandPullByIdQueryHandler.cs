using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullById;
public class GetHandPullByIdQueryHandler : GetByIdHandler<HandPull, GetHandPullByIdViewModel, GetHandPullByIdQuery>,
    IRequestHandler<GetHandPullByIdQuery, Response<GetHandPullByIdViewModel>>
{
    public GetHandPullByIdQueryHandler(IBaseRepository<HandPull> handPullRepository)
        : base(handPullRepository)
    {
    }

    public override Expression<Func<HandPull, GetHandPullByIdViewModel>> Selector => x => new GetHandPullByIdViewModel
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        RaiseHandPullOrderDate = x.RaiseHandPullOrderDate,
        RaiseHandPullOrderNo = x.RaiseHandPullOrderNo,
        WithdrawHandPullOrderDate = x.WithdrawHandPullOrderDate,
        WithdrawHandPullOrderNo = x.WithdrawHandPullOrderNo,
        Note = x.Note,
        Status = x.StatusId,
        CreateAt = x.CreateAt,
        CreateBy = x.CreateBy,
        LastUpdateAt = x.LastUpdateAt,
        LastUpdateBy = x.LastUpdateBy,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
    };

    public async Task<Response<GetHandPullByIdViewModel>> Handle(GetHandPullByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    public override Expression<Func<HandPull, bool>> IdPredicate(GetHandPullByIdQuery request)
    {
        return x => x.Id == request.Id;
    }
}