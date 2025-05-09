namespace HRM.Hub.Application.Features.PromotionHandlers.Queries.GetPromotionById;

public class GetPromotionByIdQuery : IRequest<Response<GetPromotionByIdViewModel>>
{
    public Guid Id { get; set; }
    public Status Status { get; set; } = Status.None;

}