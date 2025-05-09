using MediatR;

namespace HRM.Hub.Application.Features.JobInformationHandlers.Queries.GetAllJobInformations;
public class GetAllJobInformationsQueryHandler : GetAllWithCountHandler<JobInformation, GetAllJobInformationsViewModel, GetAllJobInformationsQuery>,
    IRequestHandler<GetAllJobInformationsQuery, Response<PagedResult<GetAllJobInformationsViewModel>>>
{
    public GetAllJobInformationsQueryHandler(IBaseRepository<JobInformation> jobInformationRepository)
        : base(jobInformationRepository)
    {
    }

    public override Expression<Func<JobInformation, GetAllJobInformationsViewModel>> Selector => x => new GetAllJobInformationsViewModel
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

        EmployeeId = x.Id,
        FullName = x.Employee.FullName,
        JobCode = x.Employee.JobCode,
        LotNumber = x.Employee.LotNumber,
        Status = x.StatusId
    };

    public override Func<IQueryable<JobInformation>, IOrderedQueryable<JobInformation>> OrderBy => order => order.OrderBy(x => x.CreateAt);

    public async Task<Response<PagedResult<GetAllJobInformationsViewModel>>> Handle(GetAllJobInformationsQuery request, CancellationToken cancellationToken)
    {
        return await HandleBase(request, cancellationToken);
    }
}