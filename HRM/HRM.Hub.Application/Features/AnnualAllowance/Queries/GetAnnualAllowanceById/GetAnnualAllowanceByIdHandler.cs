using HRM.Hub.Application.Contracts;
using HRM.Hub.Application.Extensions;
using HRM.Hub.Domain.Common;
using HRM.Hub.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.AnnualAllowance.Queries.GetAnnualAllowanceById;

public class GetAnnualAllowanceByIdHandler : IRequestHandler<GetAnnualAllowanceByIdQuery, Response<GetAnnualAllowanceByIdViewModel>>
{
    private readonly IBaseRepository<AnnualAllowanceRecord> _annualAllowanceRepository;

    public GetAnnualAllowanceByIdHandler(IBaseRepository<AnnualAllowanceRecord> annualAllowanceRepository)
    {
        _annualAllowanceRepository = annualAllowanceRepository;
    }

    public async Task<Response<GetAnnualAllowanceByIdViewModel>> Handle(GetAnnualAllowanceByIdQuery request, CancellationToken cancellationToken)
    {
        var record = await _annualAllowanceRepository.Query(x => x.Id == request.Id)
            .Select(z => new GetAnnualAllowanceByIdViewModel
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
            .FirstOrDefaultAsync(cancellationToken);

        if (record == null)
            return ErrorsMessage.NotFoundData.ToErrorMessage<GetAnnualAllowanceByIdViewModel>(null!);

        return Response<GetAnnualAllowanceByIdViewModel>.Success(record);
    }
}
