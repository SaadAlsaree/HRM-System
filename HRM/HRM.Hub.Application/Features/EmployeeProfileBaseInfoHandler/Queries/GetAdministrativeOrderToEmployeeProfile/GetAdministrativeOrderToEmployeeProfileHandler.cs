using HRM.Hub.Application.Features.Attachment.Queries.GetAttachmentById;

namespace HRM.Hub.Application.Features.EmployeeProfileBaseInfoHandler.Queries.GetAdministrativeOrderToEmployeeProfile;

public class GetAdministrativeOrderToEmployeeProfileHandler : IRequestHandler<
    GetAdministrativeOrderToEmployeeProfileQuery,
    Response<GetAdministrativeOrderToEmployeeProfileViewModel>>
{
    private readonly IBaseRepository<AdministrativeOrder> _repositoryAdministrativeOrder;

    public GetAdministrativeOrderToEmployeeProfileHandler(
        IBaseRepository<AdministrativeOrder> repositoryAdministrativeOrder)
    {
        _repositoryAdministrativeOrder = repositoryAdministrativeOrder ??
                                         throw new ArgumentNullException(nameof(repositoryAdministrativeOrder));
    }

    public async Task<Response<GetAdministrativeOrderToEmployeeProfileViewModel>> Handle(
        GetAdministrativeOrderToEmployeeProfileQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryAdministrativeOrder
            .Query(x =>
                x.EmployeeId == request.EmployeeId).Include(x => x.Employee).ToListAsync(cancellationToken: cancellationToken);

        if(resp.Count == 0)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetAdministrativeOrderToEmployeeProfileViewModel>(null);

        var result = new GetAdministrativeOrderToEmployeeProfileViewModel()
        {
            MinisterialOrderAppointingOrderNo =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.MinisterialOrderAppointing)
                    ?.OrderNo,
            MinisterialOrderAppointingOrderDate =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.MinisterialOrderAppointing)
                    ?.OrderDate,

            AdministrativeOrderForAppointmentOrderNo =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderForAppointment)
                    ?.OrderNo,
            AdministrativeOrderForAppointmentOrderDate =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderForAppointment)
                    ?.OrderDate,
            AdministrativeOrderToCommenceOrderNo =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderToCommence)
                    ?.OrderNo,
            AdministrativeOrderToCommenceOrderDate =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderToCommence)
                    ?.OrderDate,
            AdministrativeOrderToConfirmAgeOrderNo =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderToConfirmAge)
                    ?.OrderNo,
            AdministrativeOrderToConfirmAgeOrderDate =
                resp.FirstOrDefault(x =>
                        x.AdministrativeOrderType == AdministrativeOrderEnum.AdministrativeOrderToConfirmAge)
                    ?.OrderDate,

            Id = resp.FirstOrDefault()!.Id,
            EmployeeId = resp.FirstOrDefault()!.EmployeeId,
            FullName = resp.FirstOrDefault()?.Employee.FullName,
            LotNumber = resp.FirstOrDefault()?.Employee.LotNumber,
            JobCode = resp.FirstOrDefault()?.Employee.JobCode,
            Status = resp.FirstOrDefault()!.StatusId,
        };

        return SuccessMessage.Get.ToSuccessMessage(result);
    }
}