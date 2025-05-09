

namespace HRM.Hub.Application.Features.LeavesMedicalBalanceHandlers.Queries.GetLeavesMedicalBalance
{
    internal class GetLeavesMedicalBalanceQueryHandler : GetAllWithCountHandler<LeavesMedicalBalance, GetLeavesMedicalBalanceQueryViewModel, GetLeavesMedicalBalanceQuery>,
        IRequestHandler<GetLeavesMedicalBalanceQuery, Response<PagedResult<GetLeavesMedicalBalanceQueryViewModel>>>
    {
        public GetLeavesMedicalBalanceQueryHandler(IBaseRepository<LeavesMedicalBalance> repository) : base(repository)
        {
        }
        public override Expression<Func<LeavesMedicalBalance, GetLeavesMedicalBalanceQueryViewModel>> Selector =>
            x => new GetLeavesMedicalBalanceQueryViewModel
            {
                Id = x.Id,
                EmployeeId = x.Employee.Id,
                FullName = x.Employee.FullName,
                JobCode = x.Employee.JobCode,
                Note = x.Note,
                Status = x.StatusId,
                LotNumber = x.Employee.LotNumber,
                Balance = x.Balance,
            };
        public override Func<IQueryable<LeavesMedicalBalance>, IOrderedQueryable<LeavesMedicalBalance>> OrderBy =>
            query => query.OrderBy(x => x.CreateAt);
        public async Task<Response<PagedResult<GetLeavesMedicalBalanceQueryViewModel>>> Handle(GetLeavesMedicalBalanceQuery request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
    
}
