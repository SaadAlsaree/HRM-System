namespace HRM.Hub.Application.Features.AbsenceHandlers.Queries.ExportFileAbsence;
public class ExportFileAbsenceQueryHandler :
    ExportFileHandler<Absence, ExportFileAbsenceQuery>,
    IRequestHandler<ExportFileAbsenceQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public ExportFileAbsenceQueryHandler(IBaseRepository<Absence> absenceRepository)
        : base(absenceRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفة",
            "أسم الموظف",
            "رقم الأمر الإداري",
            "تاريخ الأمر الإداري",
            "تاريخ الغياب",
            "عدد الأيام",
            "الملاحظات",
            "الحالة"
        };
        _title = "إدارة الغيابات";
        _titleSheet = "الغيابات";

    }

    public override Expression<Func<Absence, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.Employee.JobCode,
        x.Employee.FullName,
        x.BookNo,
        x.BookDate,
        x.AbsenceDate,
        x.CountOfDays,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Absence>, IIncludableQueryable<Absence, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(ExportFileAbsenceQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}