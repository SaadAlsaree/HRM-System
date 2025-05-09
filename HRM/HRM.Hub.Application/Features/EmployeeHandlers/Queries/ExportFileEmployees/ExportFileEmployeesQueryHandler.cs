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
        _headers = new string[] { };
        _title = "";
        _titleSheet = "";
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
    };

    public override Func<IQueryable<Employees>, IIncludableQueryable<Employees, object>> Include => null;

    public async Task<Response<byte[]>> Handle(ExportFileEmployeesQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}