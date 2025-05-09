
namespace HRM.Hub.Application.Features.Valuations.Queries.ExportFileValuation;
public class ExportFileValuationHandler : IRequestHandler<ExportFileValuationQuery, Response<byte[]>>
{
    private readonly IBaseRepository<Valuation> _repository;
    public ExportFileValuationHandler(IBaseRepository<Valuation> repository)
    {
        _repository = repository;
    }

    public async Task<Response<byte[]>> Handle(ExportFileValuationQuery request, CancellationToken cancellationToken)
    {
        var result = await _repository.Query(filter: x => (request.EmployeeId == default || x.EmployeeId == request.EmployeeId) &&
                            x.IsDeleted == false, include: inc => inc.Include(z => z.Employee))
                            .OrderByDescending(x => x.CreateAt)
                            .GroupBy(x => x.SecondaryId).Select(item => new List<object>()
                            {
                                item.Key,
                                item.Max(z => z.Employee.JobCode),
                                item.Max(z => z.Employee.LotNumber),
                                item.Max(z => z.BookDate),
                                item.Max(z => z.BookNo),
                                item.Max(z => z.Employee.FullName),
                                item.Max(z => z.Recommendation),
                                item.Max(z => z.ValuationType),
                                item.Sum(z => z.ValuationPoints)
                            }).ToListAsync(cancellationToken: cancellationToken);
        if (result.Count == 0)
            return ErrorsMessage.NotFoundData.ToErrorMessage<byte[]>(null);
        var header = new string[]
        {
            "معرف التقييم",
            "الرقم الوظيفي",
            "رقم الأضبارة",
            "تاريخ الكتاب",
            "رقم الكتاب",
            "الاسم الكامل",
            "يوصى بمنح علاوة",
            "نوع التقييم",
            "النقاط التي حصل عليها"
        };
        var file = Utilities.GetFileExcel(new List<SheetSetting>()
        {
            new SheetSetting()
            {
                ComlumHeadrs = header,
                Data = result,
                Title = "ملف تقييم الموظفين",
                TitleSheet = "تقييم"
            }
        });
        return SuccessMessage.Get.ToSuccessMessage(file);
    }
}