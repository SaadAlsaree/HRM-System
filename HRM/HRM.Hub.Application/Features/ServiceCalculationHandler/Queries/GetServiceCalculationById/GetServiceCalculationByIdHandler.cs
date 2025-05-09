namespace HRM.Hub.Application.Features.ServiceCalculationHandler.Queries.GetServiceCalculationById;

public class GetServiceCalculationByIdHandler : IRequestHandler<GetServiceCalculationByIdQuery,
    Response<GetServiceCalculationByIdViewModel>>
{
    private readonly IBaseRepository<ServiceCalculation> _repositoryServiceCalculation;

    public GetServiceCalculationByIdHandler(IBaseRepository<ServiceCalculation> repositoryServiceCalculation)
    {
        _repositoryServiceCalculation = repositoryServiceCalculation ??
                                         throw new ArgumentNullException(nameof(repositoryServiceCalculation));
    }

    public async Task<Response<GetServiceCalculationByIdViewModel>> Handle(GetServiceCalculationByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryServiceCalculation
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetServiceCalculationByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = a.EmployeeId,
                TypeOfServiceId = a.TypeOfServiceId,
                CountOfMonth = a.CountOfMonth,
                OrderNo = a.OrderNo,
                OrderDate = a.OrderDate,
                IsPoliticalTermination = a.IsPoliticalTermination,
                Notes = a.Notes,
                Status = a.StatusId,
                StatusName = a.StatusId.GetDisplayName(),
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                LotNumber = a.Employee.LotNumber

            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}