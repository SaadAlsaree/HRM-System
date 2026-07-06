namespace HRM.Hub.Application.Features.EmployeeApplicableLawHandlers.Commands.AddEmployeeApplicableLaw;

public class AddApplicableLawHandler : CreateHandler<EmployeeApplicableLaws, AddApplicableLawCommand>, IRequestHandler<AddApplicableLawCommand, Response<bool>>
{
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public AddApplicableLawHandler(
        IBaseRepository<EmployeeApplicableLaws> repositoryApplicableLaws,
        IPromotionAllowanceCalculationService calculationService)
        : base(repositoryApplicableLaws)
    {
        _calculationService = calculationService;
    }

    protected override Expression<Func<EmployeeApplicableLaws, bool>> ExistencePredicate(AddApplicableLawCommand request) => z => z.EmployeeId == request.EmployeeId;

    protected override EmployeeApplicableLaws MapToEntity(AddApplicableLawCommand request)
    {
        return new EmployeeApplicableLaws
        {
            Id = Guid.NewGuid(),
            LawId = request.LawId,
            EmployeeId = request.EmployeeId,
            Note = request.Note,
        };
    }

    public async Task<Response<bool>> Handle(AddApplicableLawCommand request, CancellationToken cancellationToken)
    {
        var response = await HandleBase(request, cancellationToken);
        if (!response.Succeeded)
            return response;

        _ = await _calculationService.CalculateAsync(request.EmployeeId, "applicable-law-created", cancellationToken);
        return response;
    }
}
