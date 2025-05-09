namespace HRM.Hub.Application.Features.EmployeeDisciplinaryHandlers.Queries.ExportFileEmployeeDisciplinary;
public class ExportFileEmployeeDisciplinaryQueryHandler : ExportFileHandler<EmployeeDisciplinary, ExportFileEmployeeDisciplinaryQuery>,
    IRequestHandler<ExportFileEmployeeDisciplinaryQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileEmployeeDisciplinaryQueryHandler(IBaseRepository<EmployeeDisciplinary> employeeDisciplinaryRepository)
        : base(employeeDisciplinaryRepository)
    {
        _headers = new string[]
        {
            "#",
            "أسم الموظف",
            "رقم الكتاب",
            "تاريخ الكتاب",
            "عنوان الكتاب",
            "نوع العقوبة",
            "المادة القانونية",
            "سبب العقوبة",
            "عدد أشهر التأخير",
            "حالة العقوبة",
            "الملاحظات",
            "الحالة",
        };
        _title = "العقوبات";
        _titleSheet = "العقوبات";
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

    public override Expression<Func<EmployeeDisciplinary, List<object>>> Selector => x => new List<object>
    {
        x.Id,
        x.Employee.FullName,
        x.BookNo,
        x.BookDate,
        x.TitleOfBook,
        x.TypeOfDisciplinary,
        x.Reason,
        x.DisciplinaryLaw,
        x.CountOfDayDelay,
        x.StatusId.GetDisplayName(),
        x.Note,
        x.StatusId.GetDisplayName(),
    };
    public override Func<IQueryable<EmployeeDisciplinary>, IIncludableQueryable<EmployeeDisciplinary, object>> Include =>
        inc => inc.Include(z => z.Employee);

    public async Task<Response<byte[]>> Handle(ExportFileEmployeeDisciplinaryQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}