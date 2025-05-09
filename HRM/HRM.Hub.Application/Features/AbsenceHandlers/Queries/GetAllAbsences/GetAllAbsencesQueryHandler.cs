namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.GetAllAbsences;
public class GetAllAbsencesQueryHandler : GetAllWithCountHandler<Absence, GetAllAbsencesViewModel, GetAllAbsencesQuery>,
    IRequestHandler<GetAllAbsencesQuery, Response<PagedResult<GetAllAbsencesViewModel>>>
{
    public GetAllAbsencesQueryHandler(IBaseRepository<Absence> absenceRepository)
        : base(absenceRepository)
    {
    }

    public override Expression<Func<Absence, GetAllAbsencesViewModel>> Selector => x => new GetAllAbsencesViewModel
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        StatisticalIndex = x.Employee.StatisticalIndex,
        JobCode = x.Employee.JobCode,
        FullName = x.Employee.FullName,
        BookNo = x.BookNo,
        BookDate = x.BookDate,
        AbsenceDate = x.AbsenceDate,
        CountOfDays = x.CountOfDays,
        Note = x.Note,
        Status = x.StatusId,
    };

    public override Func<IQueryable<Absence>, IOrderedQueryable<Absence>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllAbsencesViewModel>>> Handle(GetAllAbsencesQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}