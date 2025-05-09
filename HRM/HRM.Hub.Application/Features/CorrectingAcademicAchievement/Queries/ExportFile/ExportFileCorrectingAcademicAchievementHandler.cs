namespace HRM.Hub.Application.Features.CorrectingAcademicAchievement.Queries.ExportFile;

public class ExportFileCorrectingAcademicAchievementHandler : ExportFileHandler<CorrectingAcademicAchievements, ExportFileCorrectingAcademicAchievementQuery>,
IRequestHandler<ExportFileCorrectingAcademicAchievementQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileCorrectingAcademicAchievementHandler(IBaseRepository<CorrectingAcademicAchievements> repository) : base(repository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفي",
            "رقم الاضبارة",
            "أسم الموظف",

            "الدرجة الوظيفية السابقة",
            "الفئة الوظيفية السابقة",
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
            "التحصيل الدراسي الجديد",

            "الملاحظات",
            "الحالة"
        };
        _title = "تصويب التحصيل الدراسي";
        _titleSheet = "تصويب التحصيل الدراسي";
    }

    public override Func<IQueryable<CorrectingAcademicAchievements>, IIncludableQueryable<CorrectingAcademicAchievements, object>> Include => inc => inc.Include(z => z.Employee);

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

    public override Expression<Func<CorrectingAcademicAchievements, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.LotNumber,
        x.Employee.FullName,
        x.DegreeFrom.Name,
        x.JobCategoryFrom.Name,
        x.JobTitleTo.Name,
        x.JobDescriptionFrom.Name,
        x.JobDescriptionTo.Name,
        x.DegreeTo.Name,
        x.AcademicAchievement.Name,
        x.DueDateDegree,
        x.JobCategoryTo.Name,
        x.DueDateCategory,
        x.BookNo,
        x.BookDate,
        x.Note,
        x.StatusId.GetDisplayName(),
    };

    public async Task<Response<byte[]>> Handle(ExportFileCorrectingAcademicAchievementQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}