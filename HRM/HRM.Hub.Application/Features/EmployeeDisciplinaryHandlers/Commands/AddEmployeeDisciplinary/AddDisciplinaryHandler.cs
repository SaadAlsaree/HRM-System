namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Commands.AddEmployeeDisciplinary;
public class AddEmployeeDisciplinaryHandler : CreateHandler<EmployeeDisciplinary, AddDisciplinaryCommand>, IRequestHandler<AddDisciplinaryCommand, Response<bool>>
{

    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public AddEmployeeDisciplinaryHandler(IBaseRepository<EmployeeDisciplinary> repositoryDisciplinary, IBaseRepository<Promotion> repositoryPromotion)
        : base(repositoryDisciplinary)
    {
        _repositoryPromotion = repositoryPromotion;
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

        // Add penalty days to promotion due dates if CountOfDayDelay has a value
        if (request.CountOfDayDelay.HasValue && request.CountOfDayDelay.Value > 0)
        {
            // Add penalty days to category due date if it exists
            if (findPromotion.DueDateCategory.HasValue)
            {
                findPromotion.DueDateCategory = findPromotion.DueDateCategory.Value.AddDays(request.CountOfDayDelay.Value);
            }


            findPromotion.Note = $"تم تأخير تاريخ الترقية بسبب العقوبة لمدة {request.CountOfDayDelay.Value} يوم";
        }

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await HandleBase(request, cancellationToken);
    }
}
