namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationExcelFile;
public class GetJobInformationExcelFileQueryHandler :
    ExportFileHandler<JobInformation, GetJobInformationExcelFileQuery>,
    IRequestHandler<GetJobInformationExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetJobInformationExcelFileQueryHandler(IBaseRepository<JobInformation> jobInformationRepository)
        : base(jobInformationRepository)
    {
        _headers = new string[]
        {
            "#",
            "الرقم الوظيفة",
            "وقت المباشرة",
            "وقت الخروج من الخدمة",
            "نوع التعيين",
            "تكليف وتنسيب الموظف",
            "هل لدى الموظف فحص طبي",
            "هل تم اعادة تعيين الموظف",
            "هل الموظف منقول من خارج الجهاز",
            "هل ما زال الموظف بالخدمة",
            "هل لديه لائحة السلوك",
            "الحالة"
        };
        _title = "إدارة المعلومات الوظيفية";
        _titleSheet = "المعلومات الوظيفية";

    }

    public override Expression<Func<JobInformation, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.HireDate,
        x.EndOfServiceDate,
        x.TypeOfJobId,
        x.AssignedId,
        x.MedicalTest,
        x.IsReEmployed,
        x.IsMovedFromOutside,
        x.IsStillWorking,
        x.IsBehaviorCode,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<JobInformation>, IIncludableQueryable<JobInformation, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetJobInformationExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا",Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}