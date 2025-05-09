using HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityExcelFile;

namespace HRM.Hub.Application.Features.ThanksAndSeniorityHandlers.Queries.GetThanksAndSeniorityExcelFile;

public class GetThanksAndSeniorityExcelFileHandler :
    ExportFileHandler<ThanksAndSeniority, GetThanksAndSeniorityExcelFileQuery>,
    IRequestHandler<GetThanksAndSeniorityExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetThanksAndSeniorityExcelFileHandler(IBaseRepository<ThanksAndSeniority> ThanksAndSeniorityRepository)
        : base(ThanksAndSeniorityRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "نوع الكتاب",
            "نوع القدم",
            "رقم الكتاب",
            "تاريخ الكتاب",
            "اسم الكتاب الممنوح",
            "السبب",
            "الاشهر",
            "هل الكتاب موثق",
            "تاريخ الاحتساب",
            "هل تم احتسابه",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة كتب الشكر والقدم";
        _titleSheet = "كتب الشكر والقدم";

    }

    public override Expression<Func<ThanksAndSeniority, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.TypeOfBook.Name,
        x.TypeOfSeniority.Name,
        x.BookNo,
        x.DateOfBook,
        x.BookIssueName,
        x.Reason,
        x.CountOfMonths,
        x.IsDocumentVerify,
        x.CalculationDate,
        x.IsCalculation,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<ThanksAndSeniority>, IIncludableQueryable<ThanksAndSeniority, object>> Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetThanksAndSeniorityExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}