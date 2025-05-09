namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAbsenceById;
public class GetAbsenceByIdQueryHandler : GetByIdHandler<Absence, GetAbsenceByIdViewModel, GetAbsenceByIdQuery>, IRequestHandler<GetAbsenceByIdQuery, Response<GetAbsenceByIdViewModel>>
{
    public GetAbsenceByIdQueryHandler(IBaseRepository<Absence> absenceRepository)
        : base(absenceRepository)
    {
    }

    public override Expression<Func<Absence, GetAbsenceByIdViewModel>> Selector => x => new GetAbsenceByIdViewModel
    {
        EmployeeId = x.EmployeeId,
        Id = x.Id,
        JobCode = x.Employee.JobCode,
        StatisticalIndex = x.Employee.StatisticalIndex,
        FullName = x.Employee.FullName,
        BookNo = x.BookNo,
        BookDate = x.BookDate,
        AbsenceDate = x.AbsenceDate,
        CountOfDays = x.Employee.Leaves.Min(y => y.CountOfDays),
        Note = x.Note,
        Status = x.StatusId,
    };

    public override Expression<Func<Absence, bool>>
        IdPredicate(GetAbsenceByIdQuery request) => x => x.Id == request.Id;

    public async Task<Response<GetAbsenceByIdViewModel>>
        Handle(GetAbsenceByIdQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}