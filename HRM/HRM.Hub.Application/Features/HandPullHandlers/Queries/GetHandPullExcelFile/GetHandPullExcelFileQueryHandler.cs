namespace HRM.Hub.Application.Features.HandPullHandlers.Queries.GetHandPullExcelFile;
public class GetHandPullExcelFileQueryHandler :
    ExportFileHandler<HandPull, GetHandPullExcelFileQuery>,
    IRequestHandler<GetHandPullExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetHandPullExcelFileQueryHandler(IBaseRepository<HandPull> handpullRepository)
        : base(handpullRepository)
    {
        _headers = new string[]
        {
            "#",
            "رقم طلب الانسحاب",
            "تاريخ طلب الانسحاب",
            "رقم كتاب رفع اليد",
            "تاريخ كتاب رفع اليد",
            "الملاحظات",
            "الحالة"
        };
        _title = "إدارة سحب اليد";
        _titleSheet = "سحب اليد";

    }

    public override Expression<Func<HandPull, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.WithdrawHandPullOrderNo,
        x.WithdrawHandPullOrderDate.Value.ToString("dd-MM-yyyy"),
        x.RaiseHandPullOrderNo,
        x.RaiseHandPullOrderDate.Value.ToString("dd-MM-yyyy"),
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<HandPull>, IIncludableQueryable<HandPull, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetHandPullExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}