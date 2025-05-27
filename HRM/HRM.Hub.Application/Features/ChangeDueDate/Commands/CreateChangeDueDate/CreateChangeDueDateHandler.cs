
namespace HRM.Hub.Application.Features.ChangeDueDate.Commands.CreateChangeDueDate;
public class CreateChangeDueDateHandler : CreateHandler<ChangeDueDates, CreateChangeDueDateCommand>,
    IRequestHandler<CreateChangeDueDateCommand, Response<bool>>
{
    private readonly IBaseRepository<Leaves> _repositoryLeave;
    private readonly IBaseRepository<Promotion> _repositoryPromotion;
    public CreateChangeDueDateHandler(IBaseRepository<ChangeDueDates> repository, IBaseRepository<Promotion> repositoryPromotion, IBaseRepository<Leaves> repositoryLeave) : base(repository)
    {
        _repositoryPromotion = repositoryPromotion;
        _repositoryLeave = repositoryLeave;
    }

    public async Task<Response<bool>> Handle(CreateChangeDueDateCommand request, CancellationToken cancellationToken)
    {
        var findLeave = await _repositoryLeave.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findLeave != null)
        {
            if (findLeave.SalaryStatusId == SalaryStatus.WithoutSalary && findLeave.CountOfDays > 120)
            {
                return ErrorsMessage.NotFoundData.ToErrorMessage(false);
            }
        }

        var findPromotion = await _repositoryPromotion.Find(z => z.Id == request.EmployeeId, cancellationToken: cancellationToken);
        if (findPromotion == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage(false);

        findPromotion.DueDateCategory = request.NewCategoryDueDate;
        findPromotion.DueDateDegree = request.NewDegreeDueDate;
        findPromotion.Note = "تغيير تاريخ التسكين";

        if (!_repositoryPromotion.Update(findPromotion))
            return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);

        return await base.HandleBase(request, cancellationToken);
    }

    protected override Expression<Func<ChangeDueDates, bool>> ExistencePredicate(CreateChangeDueDateCommand request) => null;

    protected override ChangeDueDates MapToEntity(CreateChangeDueDateCommand request)
    {
        return new ChangeDueDates()
        {
            EmployeeId = request.EmployeeId,
            CurrentCategoryDueDate = request.CurrentCategoryDueDate,
            CurrentDegreeDueDate = request.CurrentDegreeDueDate,
            NewCategoryDueDate = request.NewCategoryDueDate,
            NewDegreeDueDate = request.NewDegreeDueDate,
            OrderDate = request.OrderDate,
            OrderNo = request.OrderNo,
            Note = request.Note,
            CreateBy = request.CreateBy,
        };
    }
}