using HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;

namespace HRM.Hub.Application.Features.StudyFileHandlers.Queries.GetStudyFileExcelFile;

public class GetStudyFileExcelFileHandler :
    ExportFileHandler<StudyFile, GetStudyFileExcelFileQuery>,
    IRequestHandler<GetStudyFileExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetStudyFileExcelFileHandler(IBaseRepository<StudyFile> StudyFileRepository)
        : base(StudyFileRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "رقم الكتاب",
            "تاريخ الكتاب",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة الدراسات";
        _titleSheet = "الدراسات";

    }

    public override Expression<Func<StudyFile, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.DocumentNo,
        x.DocumentDate,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<StudyFile>, IIncludableQueryable<StudyFile, object>> Include => inc => inc
        .Include(z => z.Employee);
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

    public async Task<Response<byte[]>> Handle(GetStudyFileExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}