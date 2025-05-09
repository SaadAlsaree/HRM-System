namespace HRM.Hub.Application.Features.EducationInformationHandlers.Queries.ExportFileEducationInformation;
public class ExportFileEducationInformationQueryHandler : ExportFileHandler<EducationInformation, ExportFileEducationInformationQuery>,
    IRequestHandler<ExportFileEducationInformationQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;
    public ExportFileEducationInformationQueryHandler(IBaseRepository<EducationInformation> educationInformationRepository)
        : base(educationInformationRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفي",
            "الرقم الإحصائي",
            "أسم الموظف",
            "رقم الاضبارة",
            "المنصب",
            "حالة الموظف",
            "الجهة المانحة للشهادة",
            "التحصيل الدراسي",
            "التخصص",
            "المعدل",
            "تاريخ التخرج",
            "الملاحظات"
        };
        _title = "التحصيل الدراسي";
        _titleSheet = "التحصيل الدراسي";
    }

    public override Expression<Func<EducationInformation, List<object>>> Selector => x => new List<object>() // Average
    {
        x.Id,
        x.Employee.JobCode,
        x.Employee.StatisticalIndex,
        x.Employee.FullName,
        x.Employee.LotNumber,
        x.Employee.ManagementInformation.Position.Name,
        x.Employee.StatusId.GetDisplayName(),
        x.NameOfIssuingCertificate,
        x.AcademicAchievement.Name,
        x.AcademicField.Name,
        x.Average,
        x.GraduationYear,
        x.Notes
    };
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

    public override Func<IQueryable<EducationInformation>, IIncludableQueryable<EducationInformation, object>> Include =>
        inc => inc.Include(z => z.Employee).ThenInclude(z => z.ManagementInformation).ThenInclude(z => z.Position).Include(z => z.AcademicField);

    public async Task<Response<byte[]>> Handle(ExportFileEducationInformationQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الأمر ، أعد المحاولة لاحقاً", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }
}