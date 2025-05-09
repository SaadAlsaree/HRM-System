namespace HRM.Hub.Application.Features.ContactInformationHandlers.Queries.GetEmployeeContactInfoExcelFile;
public class GetContactInfoExcelFileQueryHandler :
    ExportFileHandler<ContactInformation, GetContactInfoExcelFileQuery>,
    IRequestHandler<GetContactInfoExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetContactInfoExcelFileQueryHandler(IBaseRepository<ContactInformation> ContactInfoRepository)
        : base(ContactInfoRepository)
    {
        _headers = new string[]
        {
            "#",
            "أسم الموظف",
            "الرقم الوظيفي",
            "رقم الهاتف",
            " اسم الشخص القريب",
            " نوع القرابة",
            "الحالة",
            "الملاحظات"
           
        };
        _title = "معلومات اقارب الموظفين";
        _titleSheet = "اقارب الوظفين";

    }

    public override Expression<Func<ContactInformation, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.FullName,
        x.Employee.JobCode,
        x.PhoneNumber,
        x.ContactName,
        x.LevelOfRelationship.Name,
        x.StatusId.GetDisplayName(),
        x.Notes


    };

    public override Func<IQueryable<ContactInformation>, IIncludableQueryable<ContactInformation, object>> Include => inc => inc.Include(z =>z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetContactInfoExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}