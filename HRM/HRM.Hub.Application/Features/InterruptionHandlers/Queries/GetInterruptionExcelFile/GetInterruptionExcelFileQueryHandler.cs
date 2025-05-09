namespace HRM.Hub.Application.Features.InterruptionHandlers.Queries.GetInterruptionExcelFile;
public class GetInterruptionExcelFileQueryHandler :
    ExportFileHandler<Interruption, GetInterruptionExcelFileQuery>,
    IRequestHandler<GetInterruptionExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetInterruptionExcelFileQueryHandler(IBaseRepository<Interruption> interruptionRepository)
        : base(interruptionRepository)
    {
        _headers = new string[]
        {
            "#",
            "تاريخ الاشعار",
            "الملاحظات",
            "سبب الانقطاع/الاستقالة",
            "الحالة"
        };
        _title = "إدارة الانقطاعات/الاستقالات";
        _titleSheet = "الانقطاعات/الاستقالات";

    }

    public override Expression<Func<Interruption, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.NotificationDate.Value.ToString("dd-MM-yyyy"),
        x.Reason,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Interruption>, IIncludableQueryable<Interruption, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetInterruptionExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}