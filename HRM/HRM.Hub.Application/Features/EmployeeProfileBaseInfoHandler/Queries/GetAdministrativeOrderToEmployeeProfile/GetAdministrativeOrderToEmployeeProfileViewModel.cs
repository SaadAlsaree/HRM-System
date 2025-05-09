namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetAdministrativeOrderToEmployeeProfile;

public class GetAdministrativeOrderToEmployeeProfileViewModel : BaseViewModel<Guid>
{
    public string MinisterialOrderAppointingOrderNo { get; set; }
    public DateOnly? MinisterialOrderAppointingOrderDate { get; set; }

    public string AdministrativeOrderForAppointmentOrderNo { get; set; }
    public DateOnly? AdministrativeOrderForAppointmentOrderDate { get; set; }

    public string AdministrativeOrderToCommenceOrderNo { get; set; }
    public DateOnly? AdministrativeOrderToCommenceOrderDate { get; set; }

    public string AdministrativeOrderToConfirmAgeOrderNo { get; set; }
    public DateOnly? AdministrativeOrderToConfirmAgeOrderDate { get; set; }

}