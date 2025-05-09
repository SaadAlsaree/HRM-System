
namespace HRM.Hub.Application.Features.MovementHandlers.Queries.GetMovementExcelFile;

public class GetMovementExcelFileHandler :
    ExportFileHandler<Movements, GetMovementExcelFileQuery>,
    IRequestHandler<GetMovementExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetMovementExcelFileHandler(IBaseRepository<Movements> MovementsRepository)
        : base(MovementsRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "رقم الطلب",
            "تاريخ الطلب",
            "تفاصيل الطلب",
            "من الدائرة",
            "الى الدائرة",
            "من المجافظة",
            "الى المجافظة",
            "من القسم",
            "الى القسم",
            "من الوحدة",
            "الى الوحدة",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة التنقلات";
        _titleSheet = "التنقلات";

    }

    public override Expression<Func<Movements, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.Employee.FullName,
        x.OrderNo,
        x.OrderDate,
        x.FromDepartment.Name,
        x.ToDepartment.Name,
        x.FromDirectorate.Name,
        x.ToDirectorate.Name,
        x.FromSection.Name,
        x.ToSection.Name,
        x.FromUnite.Name,
        x.ToUnit.Name,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Movements>, IIncludableQueryable<Movements, object>> Include => inc => inc
        .Include(z => z.Employee)
        .Include(z => z.FromDepartment)
        .Include(z => z.ToDepartment)
        .Include(z => z.FromSection)
        .Include(z => z.ToSection)
        .Include(z => z.FromDirectorate)
        .Include(z => z.ToDirectorate)
        .Include(z => z.FromUnite)
        .Include(z => z.ToUnit);

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

    public async Task<Response<byte[]>> Handle(GetMovementExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}