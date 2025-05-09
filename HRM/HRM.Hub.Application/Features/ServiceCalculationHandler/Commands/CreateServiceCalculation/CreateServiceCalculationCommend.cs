using HRM.Hub.Application.Helper;

namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Commands.CreateServiceCalculation;

public class CreateServiceCalculationCommend : IRequest<Response<bool>>
{
    public Guid EmployeeId { get; set; }
    public int TypeOfServiceId { get; set; }

    public int? CountOfMonth { get; set; }

    public string OrderNo { get; set; }

    public DateOnly? OrderDate { get; set; }

    public bool? IsPoliticalTermination { get; set; }

    public string Notes { get; set; }
}