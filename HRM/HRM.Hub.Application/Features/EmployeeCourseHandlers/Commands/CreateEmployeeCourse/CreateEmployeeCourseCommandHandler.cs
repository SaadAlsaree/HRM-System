using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Commands.CreateEmployeeCourse;
public class CreateEmployeeCourseCommandHandler : CreateHandler<EmployeeCourse, CreateEmployeeCourseCommand>, IRequestHandler<CreateEmployeeCourseCommand, Response<bool>>
{
    public CreateEmployeeCourseCommandHandler(IBaseRepository<EmployeeCourse> employeeCourseRepository)
        : base(employeeCourseRepository)
    {
    }

    protected override Expression<Func<EmployeeCourse, bool>> ExistencePredicate(CreateEmployeeCourseCommand request)
    {
        return x => false;
    }

    protected override EmployeeCourse MapToEntity(CreateEmployeeCourseCommand request)
    {
        return new EmployeeCourse
        {
            EmployeeId = request.EmployeeId,
            Title = request.Title,
            Place = request.Place,
            StartDate = request.StartDate,
            EndDate = request.EndDate,
            Evaluation = request.Evaluation,
            CreateAt = DateTime.Now,
            ResidentEntity = request.ResidentEntity,
            CourseOrderNo = request.CourseOrderNo,
            CourseOrderDate = request.CourseOrderDate,
            CourseDurationInDays = request.CourseDurationInDays,
            NominationOrderNo = request.NominationOrderNo,
            NominationOrderDate = request.NominationOrderDate,
            ReleaseOrderDate = request.ReleaseOrderDate,
            ReleaseOrderNo = request.ReleaseOrderNo,
            ReleaseDate = request.ReleaseDate,
            HireOrderNo = request.HireOrderNo,
            HireOrderDate = request.HireOrderDate,
            HireDate = request.HireDate,
            
        };
    }

    public async Task<Response<bool>> Handle(CreateEmployeeCourseCommand request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}