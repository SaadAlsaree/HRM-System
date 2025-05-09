namespace HRM.Hub.Application.Features.ChangeJobTitles.Queries.ExportFileChangeJobTitles;
public class ExportFileChangeJobTitlesHandler : ExportFileHandler<ChangeJobTitle, ExportFileChangeJobTitlesQuery>,
IRequestHandler<ExportFileChangeJobTitlesQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileChangeJobTitlesHandler(IBaseRepository<ChangeJobTitle> repository) : base(repository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفي",
            "رقم الاضبارة",
            "أسم الموظف",
            "الدرجة الوظيفية",
            "العنوان الوظيفي السابق",
            "العنوان الوظيفي الجديد",
            "الوصف الوظيفي السابق",
            "الوصف الوظيفي الجديد",
            "رقم الامر الاداري",
            "تاريخ الامر الاداري",
            "الملاحظات",
            "الحالة"
        };
        _title = "العنوان الوظيفي";
        _titleSheet = "العنوان الوظيفي";
    }

    public override Func<IQueryable<ChangeJobTitle>, IIncludableQueryable<ChangeJobTitle, object>> Include => inc => inc.Include(z => z.Employee);

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

    public override Expression<Func<ChangeJobTitle, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.LotNumber,
        x.Employee.FullName,
        x.Employee.ManagementInformation.EmploymentDegree.Name,
        x.OldJobTitle.Name,
        x.NewJobTitle.Name,
        x.OldJobDescription.Name,
        x.NewJobDescription.Name,
        x.OrderNo,
        x.OrderDate,
        x.Note,
        x.StatusId.GetDisplayName(),
    };

    public async Task<Response<byte[]>> Handle(ExportFileChangeJobTitlesQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}