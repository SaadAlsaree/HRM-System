namespace HRM.Hub.Application.Features.DocVerification.Queries.ExportFileDocVerification;
public class ExportFileDocVerificationHandler : ExportFileHandler<DocVerifications, ExportFileDocVerificationQuery>,
    IRequestHandler<ExportFileDocVerificationQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileDocVerificationHandler(IBaseRepository<DocVerifications> repository) : base(repository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفي",
            "رقم الاضبارة",
            "أسم الموظف",
            "رقم الوثيقة",
            "تاريخ الوثيقة",
            "الاجابة",
            "الجهة المرسل اليها",
            "تاريخ الارسال",
            "الملاحظات",
            "الحالة"
        };
        _title = "صحة الصدور";
        _titleSheet = "صحة الصدور";
    }

    public override Func<IQueryable<DocVerifications>, IIncludableQueryable<DocVerifications, object>> Include => inc => inc.Include(z => z.Employee);

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

    public override Expression<Func<DocVerifications, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.LotNumber,
        x.Employee.FullName,
        x.DocumentNumber,
        x.DocumentDate,
        x.Answered ?"نعم":"كلا",
        x.Recipient,
        x.SendingDate,
        x.Note,
        x.StatusId.GetDisplayName(),
    };

    public async Task<Response<byte[]>> Handle(ExportFileDocVerificationQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}