namespace HRM.Hub.Application.Features.ChangeDueDate.Queries.ExportFileChangeDueDate;
public class ExportFileChangeDueDateHandler : ExportFileHandler<ChangeDueDates, ExportFileChangeDueDateQuery>,
IRequestHandler<ExportFileChangeDueDateQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileChangeDueDateHandler(IBaseRepository<ChangeDueDates> repository) : base(repository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفي",
            "رقم الاضبارة",
            "أسم الموظف",
            "تاريخ تسكين الدرجة السابق",
            "تاريخ تسكين الدرجة الجديد",
            "تاريخ تسكين الفئة السابق",
            "تاريخ تسكين الفئة الجديد",
            "رقم الامر الاداري",
            "تاريخ الامر الاداري",
            "الملاحظات",
            "الحالة"
        };
        _title = "تصويب التحصيل الدراسي";
        _titleSheet = "تصويب التحصيل الدراسي";
    }

    public override Func<IQueryable<ChangeDueDates>, IIncludableQueryable<ChangeDueDates, object>> Include => inc => inc.Include(z => z.Employee);

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

    public override Expression<Func<ChangeDueDates, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.LotNumber,
        x.Employee.FullName,
        x.CurrentDegreeDueDate,
        x.NewDegreeDueDate,
        x.CurrentCategoryDueDate,
        x.NewCategoryDueDate,
        x.OrderNo,
        x.OrderDate,
        x.Note,
        x.StatusId.GetDisplayName(),
    };

    public async Task<Response<byte[]>> Handle(ExportFileChangeDueDateQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}