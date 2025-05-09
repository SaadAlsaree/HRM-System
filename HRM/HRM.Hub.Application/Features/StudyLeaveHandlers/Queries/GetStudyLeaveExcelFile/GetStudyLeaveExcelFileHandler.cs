using HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveExcelFile;

namespace HRM.Hub.Application.Features.StudyLeaveHandlers.Queries.GetStudyLeaveExcelFile;

public class GetStudyLeaveExcelFileHandler :
    ExportFileHandler<StudyLeave, GetStudyLeaveExcelFileQuery>,
    IRequestHandler<GetStudyLeaveExcelFileQuery, Response<byte[]>>
{
    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetStudyLeaveExcelFileHandler(IBaseRepository<StudyLeave> StudyLeaveRepository)
        : base(StudyLeaveRepository)
    {
        _headers = new string[]
        {
            "#",
            "الاسم",
            "نوع الشهادة",
            "التخصص",
            "مدة الدراسة",
            "سنة القبول",
            "اسم الشهادة الممنوحة",
            "رقم الضمان الاجتماعي",
            "تاريخ الضمان الاجتماعي",
            "رقم كتاب الانفكاك",
            "تاريخ كتاب الانفكاك",
            "رقم كتاب التعيين",
            "تاريخ كتاب التعيين",
            "حالة الدراسة",
            "نتيجة الدراسة",
            "ملاحظة",
            "الحالة"
        };
        _title = "إدارة الاجازة الدراسية";
        _titleSheet = "الاجازة الدراسية";

    }

    public override Expression<Func<StudyLeave, List<object>>> Selector => x => new List<object>()
    {
        x.Employee.Id,
        x.Employee.FullName,
        x.AcademicCertificateType.Name,
        x.AcademicField.Name,
        x.StudyPeriodTime,
        x.AcceptanceYear,
        x.NameOfIssuingCertificate,
        x.FinancialInsuranceNo,
        x.FinancialInsuranceDate,
        x.ReleaseOrderNo,
        x.ReleaseOrderDate,
        x.HireOrderNo,
        x.HireDate,
        x.StudyStatus.Name,
        x.StudyResult.Name,
        x.Notes,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<StudyLeave>, IIncludableQueryable<StudyLeave, object>> Include => inc => inc
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

    public async Task<Response<byte[]>> Handle(GetStudyLeaveExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}