namespace HRM.Hub.Application.Features.EmployeeHandlers.Queries.ExportFileEmployees;
public class ExportFileEmployeesQueryHandler : ExportFileHandler<Employees, ExportFileEmployeesQuery>,
    IRequestHandler<ExportFileEmployeesQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileEmployeesQueryHandler(IBaseRepository<Employees> employeesRepository)
        : base(employeesRepository)
    {
        _headers = new[]
        {
            "ت",
            "الاسم الكامل",
            "الرقم الوظيفي",
            "الرقم الاحصائي",
            "رقم الاضبارة",
            "المسمى الوظيفي",
            "الجنس",
            "تاريخ الميلاد",
            "الجنسية",
            "الديانة",
            "حالة الخدمة"
        };
        _title = "قائمة الموظفين";
        _titleSheet = "الموظفون";
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

    public override Expression<Func<Employees, List<object>>> Selector => x => new List<object>
    {
        x.Id,
        x.FullName ?? string.Empty,
        x.JobCode ?? string.Empty,
        x.StatisticalIndex ?? string.Empty,
        x.LotNumber ?? string.Empty,
        (x.ManagementInformation != null && x.ManagementInformation.JobTitle != null ? x.ManagementInformation.JobTitle.Name : string.Empty),
        x.Gender.ToString(),
        x.BirthDate != null ? x.BirthDate.Value.ToString() : string.Empty,
        x.Nationalism ?? string.Empty,
        x.Religion ?? string.Empty,
        x.StatusWorkingId.ToString()
    };

    public override Func<IQueryable<Employees>, IIncludableQueryable<Employees, object>> Include =>
        inc => inc.Include(e => e.ManagementInformation).ThenInclude(m => m.JobTitle);

    public async Task<Response<byte[]>> Handle(ExportFileEmployeesQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}