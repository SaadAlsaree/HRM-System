using MediatR;
using HRM.Hub.Domain.Common;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.InitializePromotionData;

public class InitializePromotionDataCommand : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public int JobDegreeId { get; set; }
    public int JobCategoryId { get; set; }
    public DateOnly? DueDateDegree { get; set; }
    public DateOnly? DueDateCategory { get; set; }
    public DateOnly? LastAllowanceDate { get; set; }
}
