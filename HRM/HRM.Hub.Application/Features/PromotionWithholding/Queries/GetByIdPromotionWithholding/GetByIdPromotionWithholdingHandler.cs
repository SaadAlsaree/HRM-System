namespace HRM.Hub.Application.Features.PromotionWithholding.Queries.GetByIdPromotionWithholding;

public class GetByIdPromotionWithholdingHandler : GetByIdHandler<LogPromotionWithholding, GetByIdPromotionWithholdingViewModel, GetByIdPromotionWithholdingQuery>,
        IRequestHandler<GetByIdPromotionWithholdingQuery, Response<GetByIdPromotionWithholdingViewModel>>
{
    public GetByIdPromotionWithholdingHandler(IBaseRepository<LogPromotionWithholding> repository) : base(repository)
    {
    }

    public override Expression<Func<LogPromotionWithholding, GetByIdPromotionWithholdingViewModel>> Selector => x => new GetByIdPromotionWithholdingViewModel()
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
        Status = x.StatusId,
        StatusName = x.StatusId.GetDisplayName(),
        ScheduledPromotionDate = x.ScheduledPromotionDate,
        WithholdingDate = x.WithholdingDate,
        ReasonForWithholding = x.ReasonForWithholding,
        Notes = x.Notes
    };

    public async Task<Response<GetByIdPromotionWithholdingViewModel>> Handle(GetByIdPromotionWithholdingQuery request, CancellationToken cancellationToken) =>
          await HandleBase(request, cancellationToken);

    public override Expression<Func<LogPromotionWithholding, bool>> IdPredicate(GetByIdPromotionWithholdingQuery request) => x => x.Id == request.Id;
}
