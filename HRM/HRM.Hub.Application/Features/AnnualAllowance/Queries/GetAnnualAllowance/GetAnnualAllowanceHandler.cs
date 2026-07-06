using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Extensions;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Common.Enums;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowance;

public class GetAnnualAllowanceHandler : IRequestHandler<GetAnnualAllowanceQuery, Response<PagedResult<GetAnnualAllowanceViewModel>>>
{
    private readonly IBaseRepository<AnnualAllowanceRecord> _annualAllowanceRepository;

    public GetAnnualAllowanceHandler(IBaseRepository<AnnualAllowanceRecord> annualAllowanceRepository)
    {
        _annualAllowanceRepository = annualAllowanceRepository;
    }

    public async Task<Response<PagedResult<GetAnnualAllowanceViewModel>>> Handle(GetAnnualAllowanceQuery request, CancellationToken cancellationToken)
    {
        var query = _annualAllowanceRepository.Query(x => x.StatusId == request.Status && x.EmployeeId == request.EmployeeId);

        var count = await query.CountAsync(cancellationToken);
        
        var result = await query
            .ApplyPagination(request)
            .Select(z => new GetAnnualAllowanceViewModel
            {
                Id = z.Id,
                EmployeeId = z.EmployeeId,
                DueDate = z.DueDate,
                ImplementationDate = z.ImplementationDate,
                BonusTypeId = z.BonusTypeId,
                ReasonForAmendment = z.ReasonForAmendment,
                AdministrativeOrderNo = z.AdministrativeOrderNo,
                AdministrativeOrderDate = z.AdministrativeOrderDate,
                AnnualAllowanceStatus = (int)z.AnnualAllowanceStatus,
                UserId = z.UserId,
                EnteredDate = z.EnteredDate,
                CalculationRunId = z.CalculationRunId,
                Status = z.StatusId,
                StatusName = z.StatusId.GetDisplayName()
            })
            .ToListAsync(cancellationToken);

        if (!result.Any())
            return ErrorsMessage.NotFoundData.ToErrorMessage<PagedResult<GetAnnualAllowanceViewModel>>(null!);

        return SuccessMessage.Get.ToSuccessMessage(new PagedResult<GetAnnualAllowanceViewModel>
        {
            Items = result,
            TotalCount = count
        });
    }
}
