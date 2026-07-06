namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.AddEmployeeDisciplinary;

public class AddEmployeeDisciplinaryHandler : CreateHandler<EmployeeDisciplinary, AddDisciplinaryCommand>, IRequestHandler<AddDisciplinaryCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    private readonly IPromotionAllowanceCalculationService _calculationService;

    public AddEmployeeDisciplinaryHandler(
        IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary,
        IBaseRepository<Promotion> repositoryPromotion,
        IPromotionAllowanceCalculationService calculationService)
        : base(repositoryDisciplinary)
    {
        _repositoryPromotion = repositoryPromotion;
        _calculationService = calculationService;
    }

    protected override Expression<Func<EmployeeDisciplinary, bool>> ExistencePredicate(AddDisciplinaryCommand request)
        => z => false;

    protected override EmployeeDisciplinary MapToEntity(AddDisciplinaryCommand request)
    {
        return new EmployeeDisciplinary
        {
            Id = Guid.NewGuid(),
            EmployeeId = request.EmployeeId,
            TitleOfBook = request.TitleOfBook,
            TypeOfDisciplinaryId = request.TypeOfDisciplinaryId,
            BookNo = request.BookNo,
            BookDate = request.BookDate,
            StopPromotion = request.StopPromotion,
            CountOfDayDelay = request.CountOfDayDelay,
            Note = request.Note,
            Reason = request.Reason,
            DisciplinaryLaw = request.DisciplinaryLaw
        };
    }

    public async Task<Response<bool>> Handle(AddDisciplinaryCommand request, CancellationToken cancellationToken)
    {
        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        var response = await HandleBase(request, cancellationToken);
        if (!response.Succeeded)
            return response;

        _ = await _calculationService.CalculateAsync(request.EmployeeId, "disciplinary-created", cancellationToken);
        return response;
    }
}
