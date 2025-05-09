
namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementExcelFile;

public class GetRetirementExcelFileHandler :
    ExportFileHandler<Retirement, GetRetirementExcelFileQuery>,
    IRequestHandler<GetRetirementExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetRetirementExcelFileHandler(IBaseRepository<Retirement> RetirementRepository)
        : base(RetirementRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "الشهادة",
            "الدرجة",
            "قرار تعديل العمر",
            "المنصب",
            "تاريخ التقاعد",
            "رقم الامر الاداري",
            "تاريخ الامر الاداري",
            "هل تم تسريحه سياسيا",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة التقاعد";
        _titleSheet = "التقاعد";

    }

    public override Expression<Func<Retirement, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.FullName,
        x.AcademicAchievement.Name,
        x.JobDegree.Name,
        x.DecisionToFixAge,
        x.EmployeePosition.Position.Name,
        x.RetirementDate,
        x.AdministrativeOrderNo,
        x.AdministrativeOrderDate,
        x.IsPoliticallyDismissed,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Retirement>, IIncludableQueryable<Retirement, object>> Include => inc => inc
        .Include(z => z.Employee)
        .Include(z => z.AcademicAchievement)
        .Include(z => z.JobDegree)
        .Include(z => z.EmployeePosition).ThenInclude(x=>x.Position)
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

    public async Task<Response<byte[]>> Handle(GetRetirementExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}