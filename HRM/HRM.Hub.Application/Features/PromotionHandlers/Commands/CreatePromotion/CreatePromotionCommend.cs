namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.CreatePromotion;

public class CreatePromotionCommend : IRequest<Response<bool>>
{
    public Guid Id { get; set; }
    public Guid EmployeeId { get; set; }

    public long? SentPromotionGroupId { get; set; }

    public int? DegreeFromId { get; set; }

    public int? DegreeToId { get; set; }

    public int? JobCategoryFromId { get; set; }

    public int? JobCategoryToId { get; set; }

    public Guid? OldEducationInformationId { get; set; }

    public Guid? NewEducationInformationId { get; set; }
    public DateOnly? DueDateDegree { get; set; }

    public DateOnly? DueDateCategory { get; set; }

    public string BookNo { get; set; }

    public DateOnly? BookDate { get; set; }

    public int? CategoryPerMonth { get; set; }

    public int? ServiceRecycle { get; set; }

    public int? TypeOfChange { get; set; }
    public string Note { get; set; }
}