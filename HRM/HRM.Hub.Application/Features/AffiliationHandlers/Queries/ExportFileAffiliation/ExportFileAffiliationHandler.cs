using HRM.Hub.Application.Extensions;
using HRM.Hub.Domain.Common;

namespace HRM.Hub.Application.Features.AffiliationHandlers.Queries.ExportFileAffiliation;

public class ExportFileAffiliationHandler :
    ExportFileHandler<Domain.Entities.Affiliation, ExportFileAffiliationQuery>,
    IRequestHandler<ExportFileAffiliationQuery, Response<byte[]>>
{


    private string[] _headers;
    private string _title;
    private string _titleSheet;

    public ExportFileAffiliationHandler(IBaseRepository<Domain.Entities.Affiliation> AffiliationRepository)
        : base(AffiliationRepository)
    {
        _headers = new string[]
        {
            "#",
            "اسم الموظف",
            "الرقم الوظيفي",
            "نوع التكليف",
            "رقم الامر",
            "تاريخ الامر",
            "موقع التكليف",
            "جهة الانتساب",
            "سبب الانتساب",
            "مدة الانتساب",
            "تاريخ البداية",
            "تاريخ النهاية",
            "عدد التجديدات",
            "ملاحظات",
            "الحالة",

        };
        _title = "جهة الانتساب";
        _titleSheet = "جهة الانتساب";

    }

    public override Expression<Func<Domain.Entities.Affiliation, List<object>>> Selector => x => new List<object>()
    {
        x.Id,
        x.Employee.FullName,
        x.Employee.JobCode,
        x.TypeOfAssignment.Name,
        x.OrderNo,
        x.OrderDate,
        x.AssignmentSite,
        x.OriginalEntity,
        x.ReasonForJoining,
        x.DurationMonths,
        x.FromDate,
        x.ToDate,
        x.RenewalCount,
        x.Note,
        x.StatusId.GetDisplayName()
    };

    public override Func<IQueryable<Domain.Entities.Affiliation>, IIncludableQueryable<Domain.Entities.Affiliation, object>> Include => inc => inc.Include(z => z.Employee).Include(z => z.TypeOfAssignment);

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

    public async Task<Response<byte[]>> Handle(ExportFileAffiliationQuery request, CancellationToken cancellationToken)
    {
        var result = await HandleBase(request, cancellationToken);
        if (result == null)
            return Response<byte[]>.Fail(new MessageResponse() { Message = "لا يمكن تنفيذ الامر اعد المحاولة لاحقا", Code = "FileError" });
        return Response<byte[]>.Success(result);
    }

}
