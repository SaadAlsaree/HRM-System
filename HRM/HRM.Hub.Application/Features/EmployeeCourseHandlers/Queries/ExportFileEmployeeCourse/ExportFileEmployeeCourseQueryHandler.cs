using HRM.Hub.Application.Extensions;

namespace HRM.Hub.Application.Features.EmployeeCourseHandlers.Queries.ExportFileEmployeeCourse;
public class ExportFileEmployeeCourseQueryHandler : ExportFileHandler<EmployeeCourse, ExportFileEmployeeCourseQuery>,
    IRequestHandler<ExportFileEmployeeCourseQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileEmployeeCourseQueryHandler(IBaseRepository<EmployeeCourse> employeeCourseRepository)
        : base(employeeCourseRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الإحصائي",
            "أسم الموظف",
            "أسم الدورة",
            "الجهة المقيمة للدورة",
            "رقم كتاب الدورة",
            "تاريخ كتاب الدورة",
            "مدة الدورة",
            "تاريخ بدء الدورة",
            "تاريخ إنتهاء الدورة",
            "مكان الدورة",
            "رقم كتاب الترشيح",
            "تاريخ كتاب الترشيح",
            "النتيجة",
            "رقم كتاب الإنفكاك",
            "تاريخ كتاب الإنفكاك",
            "تاريخ الإنفكاك",
            "رقم كتاب المباشرة",
            "تاريخ كتاب المباشرة",
            "تاريخ المباشرة",
            "الملاحظات",
            "الحالة"
        };
        _title = "الدورات التدريبية";
        _titleSheet = "الدورات التدريبية";
    }
    public override Expression<Func<EmployeeCourse, List<object>>> Selector => x => new List<object>
    {
        x.Id.StringFormat(),
        x.Employee.StatisticalIndex,
        x.Employee.FullName,
        x.Title,
        "الجهة المقيمة للدورة",
        "رقم كتاب الدورة",
        "تاريخ كتاب الدورة",
        "مدة الدورة",
        x.StartDate,
        x.EndDate,
        x.Place,
        "رقم كتاب الترشيح",
        "تاريخ كتاب الترشيح",
        x.Evaluation,
        "رقم كتاب الإنفكاك",
        "تاريخ كتاب الإنفكاك",
        "تاريخ الإنفكاك",
        "رقم كتاب المباشرة",
        "تاريخ كتاب المباشرة",
        "تاريخ المباشرة",
        "الملاحظات",
        x.StatusId.GetDisplayName()
    };

    public override string[] Headers
    {
        get => _headers;
        set => _headers = value;
    }
    public override string Title
    {
        get => _title;
        set => _title = value;
    }
    public override string TitleSheet
    {
        get => _titleSheet;
        set => _titleSheet = value;
    }

    public override Func<IQueryable<EmployeeCourse>, IIncludableQueryable<EmployeeCourse, object>> Include =>
        inc => inc.Include(z => z.Employee);

    public async Task<Response<byte[]>> Handle(ExportFileEmployeeCourseQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}