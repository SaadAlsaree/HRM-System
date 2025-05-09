using HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationExcelFile;

namespace HRM.Hub.Application.Features.ResignationHandlers.Queries.GetResignationExcelFile;

public class GetResignationExcelFileHandler :
    ExportFileHandler<Resignation, GetResignationExcelFileQuery>,
    IRequestHandler<GetResignationExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetResignationExcelFileHandler(IBaseRepository<Resignation> ResignationRepository)
        : base(ResignationRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "السبب",
            "رقم الطلب",
            "تاريخ الطلب",
            "رقم امر الاستقالة",
            "تاريخ امر الاستقالة",
            "رقم امر الانفكاك",
            "تاريخ امر الانفكاك",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة الاستقالات";
        _titleSheet = "الاستقالات";

    }

    public override Expression<Func<Resignation, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.Reason,
        x.RequestNo,
        x.RequestDate,
        x.ResignationOrderNo,
        x.ResignationOrderDate,
        x.SeparationOrderNo,
        x.SeparationOrderDate,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Resignation>, IIncludableQueryable<Resignation, object>> Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetResignationExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}