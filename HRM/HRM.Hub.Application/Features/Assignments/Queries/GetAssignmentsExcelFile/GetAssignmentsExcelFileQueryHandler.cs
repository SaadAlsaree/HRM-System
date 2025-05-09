namespace HRM.Hub.Application.Features.Assignments.Queries.GetAssignmentsExcelFile;
public class GetAssignmentsExcelFileQueryHandler :
    ExportFileHandler<Domain.Entities.Assignments, GetAssignmentsExcelFileQuery>,
    IRequestHandler<GetAssignmentsExcelFileQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public GetAssignmentsExcelFileQueryHandler(IBaseRepository<Domain.Entities.Assignments> AssignmentsRepository)
        : base(AssignmentsRepository)
    {
        _headers = new string[]
        {
            "#",
            "اسم الموظف",
            "الرقم الوظيفي",
            "نوع التكليف",
            "رقم الامر الاداري",
            "تاريخ الامر الاداري",
            " موقع التلكيف",
            "تكليف من",
            "تكليف الى",
            "مدة تكليف",
            "رقم امر التعيين",
            "تاريخ التعيين",
            "رقم امر انهاء التلكيف",
            "تاريخ امر انهاء التلكيف",
            "ملاحظات",
            "الحالة",

        };
        _title = "الاوامر الادارية";
        _titleSheet = "الاوامر الادارية";

    }

    public override Expression<Func<Domain.Entities.Assignments, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.FullName,
        x.Employee.JobCode,
        x.TypeOfAssignment.Name,
       x.OrderNo,
        x.OrderDate,
        x.AssignmentSite,
         x.AssignedFromOrganization,
         x.AssignedToOrganization,
        x.DurationOfAssignment,
        x.HireOrderNo,
        x.HireOrderDate,
        x.EndOrderNo,
        x.EndOrderDate,
        x.EndReleaseOrderDate,
         x.EndReleaseOrderNo,
        x.EndHireNo,
        x.EndHireDate,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Domain.Entities.Assignments>, IIncludableQueryable<Domain.Entities.Assignments, object>> Include => inc => inc.Include(z => z.Employee);

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

    public async Task<Response<byte[]>> Handle(GetAssignmentsExcelFileQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}