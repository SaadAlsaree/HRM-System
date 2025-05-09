using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Query.GetById;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.GetEmployeeCourseById;
public class GetEmployeeCourseByIdQueryHandler : GetByIdHandler<EmployeeCourse, GetEmployeeCourseByIdViewModel, GetEmployeeCourseByIdQuery>,
    IRequestHandler<GetEmployeeCourseByIdQuery, Response<GetEmployeeCourseByIdViewModel>>
{
    public GetEmployeeCourseByIdQueryHandler(IBaseRepository<EmployeeCourse> employeeCourseRepository)
        : base(employeeCourseRepository)
    {
    }

    public override Expression<Func<EmployeeCourse, GetEmployeeCourseByIdViewModel>> Selector => x => new GetEmployeeCourseByIdViewModel
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

    public async Task<Response<GetEmployeeCourseByIdViewModel>> Handle(GetEmployeeCourseByIdQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }

    public override Expression<Func<EmployeeCourse, bool>> IdPredicate(GetEmployeeCourseByIdQuery request)
    {
        return x => x.Id == request.Id;
    }
}