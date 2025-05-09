using HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionExcelFile;

namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionExcelFile;

public class GetPromotionExcelFileHandler :
    ExportFileHandler<Promotion, GetPromotionExcelFileQuery>,
    IRequestHandler<GetPromotionExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetPromotionExcelFileHandler(IBaseRepository<Promotion> PromotionRepository)
        : base(PromotionRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "الدرجة",
            "قسم الدرجة",
            "تاريخ انتهاء الدرجة",
            "تاريخ انتهاء قسم الدرة",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة الترقيات";
        _titleSheet = "الترقيات";

    }

    public override Expression<Func<Promotion, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.JobDegree.Name,
        x.JobCategory.Name,
        x.DueDateDegree,
        x.DueDateCategory,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Promotion>, IIncludableQueryable<Promotion, object>> Include => inc => inc
        .Include(z => z.Employee)
        .Include(z => z.JobDegree)
        .Include(z => z.JobCategory);

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

    public async Task<Response<byte[]>> Handle(GetPromotionExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}