using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Commands.CreateEmployeeCourse;
public sealed record CreateEmployeeCourseCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public string Title { get; set; }
    public string Place { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Evaluation { get; set; }
    public string ResidentEntity { get; set; }
    
    public string CourseOrderNo { get; set; }
    public DateOnly? CourseOrderDate { get; set; }
    
    public int CourseDurationInDays { get; set; }
    
    public string NominationOrderNo { get; set; }
    public DateOnly? NominationOrderDate { get; set; }

    public DateOnly? ReleaseOrderDate { get; set; }

    public string ReleaseOrderNo { get; set; }
    public DateOnly? ReleaseDate { get; set; }

    public string HireOrderNo { get; set; }

    public DateOnly? HireOrderDate { get; set; }
    public DateOnly? HireDate { get; set; }

}