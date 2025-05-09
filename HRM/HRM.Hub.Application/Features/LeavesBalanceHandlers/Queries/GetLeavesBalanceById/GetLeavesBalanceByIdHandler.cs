namespace HRM.Hub.Application.Features.LeavesBalanceHandlers.Queries.GetLeavesBalanceById;

public class GetLeavesBalanceByIdHandler : IRequestHandler<GetLeavesBalanceByIdQuery,
    Response<GetLeavesBalanceByIdViewModel>>
{
    private readonly IBaseRepository<LeavesBalance> _repositoryLeave;

    public GetLeavesBalanceByIdHandler(IBaseRepository<LeavesBalance> repositoryLeave)
    {
        _repositoryLeave = repositoryLeave ??
                                         throw new ArgumentNullException(nameof(repositoryLeave));
    }

    public async Task<Response<GetLeavesBalanceByIdViewModel>> Handle(GetLeavesBalanceByIdQuery request,
        CancellationToken cancellationToken)
    {
        var resp = await _repositoryLeave
            .Query(x =>
                x.Id == request.Id)
            .Select(a => new GetLeavesBalanceByIdViewModel()
            {
                Id = a.Id,
                EmployeeId = a.Id,
                FullName = a.Employee.FullName,
                JobCode = a.Employee.JobCode,
                Note = a.Note,
                Status = a.StatusId,
                Balance = a.Balance,
                LotNumber = a.Employee.LotNumber,
            })
            .FirstOrDefaultAsync(cancellationToken: cancellationToken);

        return SuccessMessage.Get.ToSuccessMessage(resp);
    }
}