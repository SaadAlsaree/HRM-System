using HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionExcelFile;

namespace HRM.Hub.Application.Features.StudyLeaveExtensionHandlers.Queries.GetStudyLeaveExtensionExcelFile;

public class GetStudyLeaveExtensionExcelFileHandler :
    ExportFileHandler<StudyLeaveExtension, GetStudyLeaveExtensionExcelFileQuery>,
    IRequestHandler<GetStudyLeaveExtensionExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetStudyLeaveExtensionExcelFileHandler(IBaseRepository<StudyLeaveExtension> StudyLeaveExtensionRepository)
        : base(StudyLeaveExtensionRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "رقم الطلب",
            "تاريخ الطلب",
            "من تاريخ",
            "الى تاريخ",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة تمديد الاجازة الدراسية";
        _titleSheet = "تمديد الاجازة الدراسية";

    }

    public override Expression<Func<StudyLeaveExtension, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.OrderNo,
        x.OrderDate,
        x.FromDate,
        x.ToDate,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<StudyLeaveExtension>, IIncludableQueryable<StudyLeaveExtension, object>> Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetStudyLeaveExtensionExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}