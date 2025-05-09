namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWoundedExcelFile;

public class GetMartyrsAndWoundedExcelFileHandler :
    ExportFileHandler<MartyrsAndWounded, GetMartyrsAndWoundedExcelFileQuery>,
    IRequestHandler<GetMartyrsAndWoundedExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetMartyrsAndWoundedExcelFileHandler(IBaseRepository<MartyrsAndWounded> MartyrsAndWoundedRepository)
        : base(MartyrsAndWoundedRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "رقم الأمر الإداري",
            "تاريخ الأمر الإداري",
            "تاريخ التقاعد",
            "تاريخ الشهادة",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة الشهداء والجرحى";
        _titleSheet = "الشهداء والجرحى";

    }

    public override Expression<Func<MartyrsAndWounded, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.Employee.FullName,
        x.AdministrativeOrderNo,
        x.AdministrativeOrderDate,
        x.RetirementDate,
        x.DateOfMartyrdom,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<MartyrsAndWounded>, IIncludableQueryable<MartyrsAndWounded, object>>
        Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetMartyrsAndWoundedExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}