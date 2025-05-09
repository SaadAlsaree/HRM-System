namespace HRM.Hub.Application.Features.AddressInformationHandlers.Queries.GetAddressInformationExcelFile;
public class GetAddressInfoExcelFileQueryHandler :
    ExportFileHandler<AddressInformation, GetAddressInfoExcelFileQuery>,
    IRequestHandler<GetAddressInfoExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetAddressInfoExcelFileQueryHandler(IBaseRepository<AddressInformation> AddressInfoRepository)
        : base(AddressInfoRepository)
    {
        _headers = new string[]
        {
            "#",
            "اسم الموظف",
            " المحافظة",
            "اقرب نقطة دالة",
            "رقم الدار",
            " رقم الشارع",
            "الناحية",
            "المنطقة",
            "الملاحضات",
            "الحالة"
        };
        _title = "عناوين الموظفين  ";
        _titleSheet = "الموقع الجغرافي";

    }

    public override Expression<Func<AddressInformation, List<object>>> Selector => x => new List<object>()
    {
         x.Id,
         x.Employee.FullName,
        x.Governorate.Name,
        x.NearestPoint,
        x.HouseNo,
        x.StreetNo,
        x.Province.Name,
        x.Territory.Name,
        x.Notes,
        x.StatusId.GetDisplayName(),
    };

    public override Func<IQueryable<AddressInformation>, IIncludableQueryable<AddressInformation, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetAddressInfoExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}