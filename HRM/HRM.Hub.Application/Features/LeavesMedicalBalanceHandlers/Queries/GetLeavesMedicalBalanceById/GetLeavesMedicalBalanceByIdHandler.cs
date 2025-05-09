

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalanceById
{
    public class GetLeavesMedicalBalanceByIdHandler : IRequestHandler<GetLeavesMedicalBalanceByIdQuery, Response<GetLeavesMedicalBalanceQueryByIdViewModel>>
    {

        private readonly IBaseRepository<LeavesMedicalBalance> _repositoryLeave;

        public GetLeavesMedicalBalanceByIdHandler(IBaseRepository<LeavesMedicalBalance> repositoryLeave)
        {
            _repositoryLeave = repositoryLeave ?? throw new ArgumentNullException(nameof(repositoryLeave));
        }

        public async Task<Response<GetLeavesMedicalBalanceQueryByIdViewModel>> Handle(GetLeavesMedicalBalanceByIdQuery request, CancellationToken cancellationToken)
        {
            var resp = await _repositoryLeave
                .Query(x => x.Id == request.Id)
                .Select(a => new GetLeavesMedicalBalanceQueryByIdViewModel
                {
                    Id = a.Id,
                    EmployeeId = a.Employee.Id,
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
}
