namespace HRM.Hub.Application.Features.EmployeeServiceHandlers.Queries.GetEmployeeServiceExcelFile;
public class GetEmployeeServiceExcelFileQueryHandler :
    ExportFileHandler<EmployeeService, GetEmployeeServiceExcelFileQuery>,
    IRequestHandler<GetEmployeeServiceExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetEmployeeServiceExcelFileQueryHandler(IBaseRepository<EmployeeService> employeeserviceRepository)
        : base(employeeserviceRepository)
    {
        _headers = new string[]
        {
            "#",
            "تحسب لاغراض التقاعد",
            "تحسب لاغراض الترفيع",
            "الملاحظات",
            "الحالة"
        };
        _title = "إدارة استقطاعات الموظف";
        _titleSheet = "استقطاعات الموظف";

    }

    public override Expression<Func<EmployeeService, List<object>>> Selector => x => new List<object>()
    {
        x.RetirementCalculation,
        x.PromotionCalculation,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<EmployeeService>, IIncludableQueryable<EmployeeService, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetEmployeeServiceExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}