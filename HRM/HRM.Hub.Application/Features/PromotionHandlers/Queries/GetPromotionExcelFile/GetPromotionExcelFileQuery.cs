namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionExcelFile;

public class GetPromotionExcelFileQuery : IRequest<Response<byte[]>>
{
    public Guid EmployeeId { get; set; }
}