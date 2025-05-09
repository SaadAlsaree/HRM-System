namespace HRM.Hub.Application.Features.ChangeDegree.Queries.ExportFileChangeDegree;
public class ExportFileChangeDegreeHandler : ExportFileHandler<ChangeDegrees, ExportFileChangeDegreeQuery>,
IRequestHandler<ExportFileChangeDegreeQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileChangeDegreeHandler(IBaseRepository<ChangeDegrees> repository) : base(repository)
    {
        _headers = new string[]
        {
             "#",
            "الرقم الوظيفي",
            "رقم الاضبارة",
            "أسم الموظف",
            "الدرجة الوظيفية السابقة",
            "تاريخ تسكين الدرجة السابق",
            "الفئة الوظيفية السابقة",
            "تاريخ تسكين الفئة السابق",
            "العنوان الوظيفي السابق",
            "التحصيل الدراسي السابق",

            "العنوان الوظيفي الجديد",
            "التحصيل الدراسي الجديد",

            "الدرجة الوظيفية الجديدة",
            "تاريخ تسكين الدرجة الجديد",

            "الفئة الوظيفية الجديدة",
            "تاريخ تسكين الفئة الجديد",

            "رقم الامر الاداري",
            "تاريخ الامر الاداري",

            "الملاحظات",
            "الحالة"
        };
        _title = "تسريع درجة";
        _titleSheet = "تسريع درجة";
    }

    public override Func<IQueryable<ChangeDegrees>, IIncludableQueryable<ChangeDegrees, object>> Include => inc => inc.Include(z => z.Employee);

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

    public override Expression<Func<ChangeDegrees, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.LotNumber,
        x.Employee.FullName,
        x.JobDegreeFrom.Name,
        x.OldDegreeDueDate, 
        x.JobCategoryFrom.Name,
        x.OldDegreeDueDate,
        x.JobTitleFrom.Name,
        x.JobDescriptionFrom.Name,

        x.JobTitleTo.Name,
        x.JobDescriptionTo.Name,

        x.JobDegreeTo.Name,
        x.NewDegreeDueDate,
        x.JobCategoryTo.Name,
        x.NewCategoryDueDate,
        x.OrderNo,
        x.OrderDate,
        x.Note,
        x.StatusId.GetDisplayName(),
    };

    public async Task<Response<byte[]>> Handle(ExportFileChangeDegreeQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}