using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.HandPullHandlers.Commands.CreateHandPull;
public class CreateHandPullCommandHandler : CreateHandler<HandPull, CreateHandPullCommand>,
    IRequestHandler<CreateHandPullCommand, Response<bool>>
{
    public CreateHandPullCommandHandler(IBaseRepository<HandPull> handPullRepository)
        : base(handPullRepository)
    {
    }

    public async Task<Response<bool>> Handle(CreateHandPullCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    protected override Expression<Func<HandPull, bool>> ExistencePredicate(CreateHandPullCommand request)
    {
        return x => false;
    }

    protected override HandPull MapToEntity(CreateHandPullCommand request)
    {
        return new HandPull
        {
            EmployeeId = request.EmployeeId,
            RaiseHandPullOrderDate = request.RaiseHandPullOrderDate,
            RaiseHandPullOrderNo = request.RaiseHandPullOrderNo,
            WithdrawHandPullOrderDate = request.WithdrawHandPullOrderDate,
            WithdrawHandPullOrderNo = request.WithdrawHandPullOrderNo,
            CreateAt = DateTime.Now,
            Note = request.Note,
        };
    }
}