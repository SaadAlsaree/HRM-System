
namespace HRM.Hub.Application.Features.Valuations.Queries.GetValuationExcelFile;

public class GetValuationExcelFileHandler :
    ExportFileHandler<Valuation, GetValuationExcelFileQuery>,
    IRequestHandler<GetValuationExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetValuationExcelFileHandler(IBaseRepository<Valuation> ValuationRepository)
        : base(ValuationRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "ناريخ التقييم",
            "مقتاح التقييم",
            "رقم الكتاب",
            "تاريخ الكتاب",
            "نقاط التقييم",
            "التوصيات",
            "نوع التقييم",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة التقييمات";
        _titleSheet = "التقييمات";

    }

    public override Expression<Func<Valuation, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.ValuationDate,
        x.ValuationKey,
        x.BookNo,
        x.BookDate,
        x.ValuationPoints,
        x.Recommendation,
        x.ValuationType,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Valuation>, IIncludableQueryable<Valuation, object>> Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetValuationExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}