namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Queries.ExportFileEmployeePosition;
public class ExportFileEmployeePositionQueryHandler : ExportFileHandler<EmployeePosition, ExportFileEmployeePositionQuery>,
    IRequestHandler<ExportFileEmployeePositionQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileEmployeePositionQueryHandler(IBaseRepository<EmployeePosition> employeePositionRepository)
        : base(employeePositionRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الإحصائي",
            "أسم الموظف",
            "الدائرة أو المديرية",
            "رقم الأمر الإداري",
            "تاريخ الأمر الإداري",
            "تاريخ التكليف",
            "المنصب",
            "الملاحظات",
            "الحالة"
        };
        _title = "المناصب";
        _titleSheet = "المناصب";
    }

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

    public override Expression<Func<EmployeePosition, List<object>>> Selector => x => new List<object>
    {
        x.Id,
        x.Employee.StatisticalIndex,
        x.Employee.FullName,
        x.Directorate.Name,
        x.AdministrativeOrderNo,
        x.AdministrativeOrderDate,
        x.AssignedOrderDate,
        x.Position.Name,
        x.Note,
        x.StatusId.GetDisplayName()
    };
    public override Func<IQueryable<EmployeePosition>, IIncludableQueryable<EmployeePosition, object>> Include =>
        inc => inc.Include(z => z.Employee).Include(z => z.Directorate).Include(z => z.Position);

    public async Task<Response<byte[]>> Handle(ExportFileEmployeePositionQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}