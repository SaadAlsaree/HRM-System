namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetJobInformationById;
public class GetJobInformationByIdQueryHandler : GetByIdHandler<JobInformation, GetJobInformationByIdViewModel, GetJobInformationByIdQuery>, IRequestHandler<GetJobInformationByIdQuery, Response<GetJobInformationByIdViewModel>>
{
    public GetJobInformationByIdQueryHandler(IBaseRepository<JobInformation> jobInformationRepository)
        : base(jobInformationRepository)
    {
    }

    public override Expression<Func<JobInformation, GetJobInformationByIdViewModel>> Selector => x => new GetJobInformationByIdViewModel
    {
        Id = x.Id,
        AssignedId = x.AssignedId,
        EndOfServiceDate = x.EndOfServiceDate,
        IsBehaviorCode = x.IsBehaviorCode,
        HireDate = x.HireDate,
        IsMovedFromOutside = x.IsMovedFromOutside,
        IsStillWorking = x.IsStillWorking,
        MedicalTest = x.MedicalTest,
        IsReEmployed = x.IsReEmployed,
        TypeOfJobId = x.TypeOfJobId,
        Status = x.StatusId,

        EmployeeId = x.Employee.Id,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
    };

    public override Expression<Func<JobInformation, bool>>
        IdPredicate(GetJobInformationByIdQuery request) => x => x.Id == request.Id;

    public async Task<Response<GetJobInformationByIdViewModel>>
        Handle(GetJobInformationByIdQuery request, CancellationToken cancellationToken) =>
        await HandleBase(request, cancellationToken);
}