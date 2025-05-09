namespace HRM.Hub.Application.Features.ManagementInformationHandlers.Queries.GetManagementInformationExcelFile;
public class GetManagementInformationExcelFileQueryHandler :
    ExportFileHandler<ManagementInformation, GetManagementInformationExcelFileQuery>,
    IRequestHandler<GetManagementInformationExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetManagementInformationExcelFileQueryHandler(IBaseRepository<ManagementInformation> managementinformationRepository)
        : base(managementinformationRepository)
    {
        _headers = new string[]
        {
            "#",
            "المديرية",
            "المديرية الفرعية",
            "القسم",
            "الشعبة",
            "الوحدة",
            "المنصب",
            "درجة التعيين",
            "الدرجة الوظيفية",
            "الفئة الوظيفة",
            "العنوان الوظيفي للموظف",
            "الوصف الوضيفي للموظف",
            "وقف الدرجة الوظيفة",
            "إيقاف الترفيع",
            "ملحوظات",
            "الحالي",
            "هل ما زال في الوظيفة",
        };
        _title = "إدارة المعلومات الادارية";
        _titleSheet = "المعلومات الادارية";

    }

    public override Expression<Func<ManagementInformation, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.DirectorateId,
        x.SubDirectorateId,
        x.DepartmentId,
        x.PositionId,
        x.EmploymentDegreeId,
        x.Employee.Promotion.JobDegreeId,
        x.Employee.Promotion.JobCategoryId,
        x.JobTitleId,
        x.JobDescriptionId,
        x.StopJobDegreeId,
        x.Employee.Promotion.StopPromotion,
        x.Notes,
        x.IsCurrent,
        x.IsInHiring,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<ManagementInformation>, IIncludableQueryable<ManagementInformation, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetManagementInformationExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}