namespace HRM.Hub.Application.Features.DocVerification.Queries.GetEmployeeDocVerification;
public class GetEmployeeDocVerificationHandler : GetByIdHandler<Employees, GetEmployeeDocVerificationViewModel, GetEmployeeDocVerificationQuery>,
        IRequestHandler<GetEmployeeDocVerificationQuery, Response<GetEmployeeDocVerificationViewModel>>
{
    public GetEmployeeDocVerificationHandler(IBaseRepository<Employees> repository) : base(repository)
    {
    }

    public override Expression<Func<Employees, GetEmployeeDocVerificationViewModel>> Selector => x => new GetEmployeeDocVerificationViewModel()
    {
        EmployeeId = x.Id,
        SubDirectorateName = x.ManagementInformation.SubDirectorate.Name,
        JobCode = x.JobCode,
        StatisticalIndex = x.StatisticalIndex,
        LotNumber = x.LotNumber,
        DirectorateName = x.ManagementInformation.Directorate.Name,
        Status = x.StatusId,
        EmployeeStatusName = "مستمر في الخدمة"
        // ToDo Change to LINQ Mathod
    };

    public async Task<Response<GetEmployeeDocVerificationViewModel>> Handle(GetEmployeeDocVerificationQuery request, CancellationToken cancellationToken)
        => await base.HandleBase(request,cancellationToken);

    public override Expression<Func<Employees, bool>> IdPredicate(GetEmployeeDocVerificationQuery request)
        => x => x.Id == request.EmployeeId;
}