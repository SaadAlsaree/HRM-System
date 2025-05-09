using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetAll;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.GetAllEmployeeCourses;
public class GetAllEmployeeCoursesQueryHandler : GetAllWithCountHandler<EmployeeCourse, GetAllEmployeeCoursesViewModel, GetAllEmployeeCoursesQuery>,
    IRequestHandler<GetAllEmployeeCoursesQuery, Response<PagedResult<GetAllEmployeeCoursesViewModel>>>
{
    public GetAllEmployeeCoursesQueryHandler(IBaseRepository<EmployeeCourse> employeeCourseRepository)
        : base(employeeCourseRepository)
    {
    }

    public override Expression<Func<EmployeeCourse, GetAllEmployeeCoursesViewModel>> Selector => x => new GetAllEmployeeCoursesViewModel
    {
        Id = x.Id,
        EmployeeId = x.EmployeeId,
        FullName = x.Employee.FullName,
        LotNumber = x.Employee.LotNumber,
        JobCode = x.Employee.JobCode,
        Title = x.Title,
        Place = x.Place,
        StartDate = x.StartDate.ToString("yyyy-MM-dd"),
        EndDate = x.EndDate.ToString("yyyy-MM-dd"),
        Evaluation = x.Evaluation,
        Status = x.StatusId,
        ResidentEntity = x.ResidentEntity,
        CourseOrderNo = x.CourseOrderNo,
        CourseOrderDate = x.CourseOrderDate,
        CourseDurationInDays = x.CourseDurationInDays,
        NominationOrderNo = x.NominationOrderNo,
        NominationOrderDate = x.NominationOrderDate,
        ReleaseOrderDate = x.ReleaseOrderDate,
        ReleaseOrderNo = x.ReleaseOrderNo,
        ReleaseDate = x.ReleaseDate,
        HireOrderNo = x.HireOrderNo,
        HireOrderDate = x.HireOrderDate,
        HireDate = x.HireDate,
    };

    public override Func<IQueryable<EmployeeCourse>, IOrderedQueryable<EmployeeCourse>> OrderBy => o =>
        o.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllEmployeeCoursesViewModel>>> Handle(GetAllEmployeeCoursesQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}