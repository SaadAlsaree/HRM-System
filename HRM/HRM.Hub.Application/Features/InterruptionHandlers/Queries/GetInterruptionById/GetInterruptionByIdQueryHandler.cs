using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetInterruptionById;
public class GetInterruptionByIdQueryHandler : GetByIdHandler<Interruption, GetInterruptionByIdViewModel, GetInterruptionByIdQuery>,
    IRequestHandler<GetInterruptionByIdQuery, Response<GetInterruptionByIdViewModel>>
{
    public GetInterruptionByIdQueryHandler(IBaseRepository<Interruption> interruptionRepository)
    : base(interruptionRepository)
    {
    }

    public override Expression<Func<Interruption, GetInterruptionByIdViewModel>> Selector => x
        => new GetInterruptionByIdViewModel
        {
            EmployeeId = x.EmployeeId,
            NotificationDate = x.NotificationDate,
            Reason = x.Reason,
            Note = x.Note,
            Status = x.StatusId,
            CreateAt = x.CreateAt,
            CreateBy = x.CreateBy,
            LastUpdateAt = x.LastUpdateAt,
            LastUpdateBy = x.LastUpdateBy,
            FullName = x.Employee.FullName,
            LotNumber = x.Employee.LotNumber,
            JobCode = x.Employee.JobCode,
            Id = x.Id,
        };

    public async Task<Response<GetInterruptionByIdViewModel>> Handle(GetInterruptionByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    public override Expression<Func<Interruption, bool>> IdPredicate(GetInterruptionByIdQuery request)
    {
        return x => x.Id == request.Id;
    }
}