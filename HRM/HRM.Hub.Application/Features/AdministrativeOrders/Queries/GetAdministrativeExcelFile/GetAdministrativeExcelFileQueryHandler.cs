namespace HRM.Hub.Application.Features.AdministrativeOrders.Queries.GetAdministrativeExcelFile;
public class GetAdministrativeExcelFileQueryHandler :
    ExportFileHandler<AdministrativeOrder, GetAdministrativeExcelFileQuery>,
    IRequestHandler<GetAdministrativeExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetAdministrativeExcelFileQueryHandler(IBaseRepository<AdministrativeOrder> AdministrativeRepository)
        : base(AdministrativeRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفة",
            "أسم الموظف",
            "رقم الكتاب",
            " تاريخ الامر",
            "رقم الامر الاداري",
            "نوع الامر الاداري",
            "الحالة",
           
        };
        _title = "الاوامر الادارية";
        _titleSheet = "الاوامر الادارية";

    }

    public override Expression<Func<AdministrativeOrder, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.FullName,
        x.BookTitle,
        x.OrderDate,
        x.OrderNo,
        x.StatusId.GetDisplayName(),
        x.AdministrativeOrderType.GetDisplayName()

    };

    public override Func<IQueryable<AdministrativeOrder>, IIncludableQueryable<AdministrativeOrder, object>> Include => inc => inc.Include(z =>z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetAdministrativeExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}