namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Queries.GetMarriageInformationExcelFile;
public class GetMarriageInformationExcelFileQueryHandler :
    ExportFileHandler<MarriageInformation, GetMarriageInformationExcelFileQuery>,
    IRequestHandler<GetMarriageInformationExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetMarriageInformationExcelFileQueryHandler(IBaseRepository<MarriageInformation> marriageinformationRepository)
        : base(marriageinformationRepository)
    {
        _headers = new string[]
        {
            "#",
            "اسم الزوج/الزوجة",
            "اسم الاب",
            "اسم الجد",
            "اسم العائلة",
            "الاسم الكامل",
            "تاريخ الزواج",
            "عدد الأطفال",
            "ما زال متزوج؟",
            "الملاحظات",
            "الحالة"
        };
        _title = "إدارة عقود الزواج";
        _titleSheet = "عقود الزواج";

    }

    public override Expression<Func<MarriageInformation, List<object>>> Selector => x => new List<object>()
    {
        x.EmployeeId,
        x.FirstName,
        x.SecondName,
        x.ThirdName,
        x.SurName,
        x.FullName,
        x.MarriageDate.Value.ToString("dd-MM-yyyy"),
        x.ChildrenCount,
        x.IsCurrent,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<MarriageInformation>, IIncludableQueryable<MarriageInformation, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetMarriageInformationExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}