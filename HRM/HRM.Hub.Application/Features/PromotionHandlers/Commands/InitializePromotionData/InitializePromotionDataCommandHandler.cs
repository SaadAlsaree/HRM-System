using MediatR;
using HRM.Hub.Domain.Common;
using HRM.Hub.Application.Contracts;
using HRM.Hub.Domain.Entities;
using HRM.Hub.Domain.Common.Enums;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Application.Features.PromotionHandlers.Commands.InitializePromotionData;

public class InitializePromotionDataCommandHandler : IRequestHandler<InitializePromotionDataCommand, Response<bool>>
{
    private readonly IBaseRepository<Promotion> _promotionRepository;

    public InitializePromotionDataCommandHandler(IBaseRepository<Promotion> promotionRepository)
    {
        _promotionRepository = promotionRepository ?? throw new ArgumentNullException(nameof(promotionRepository));
    }

    public async Task<Response<bool>> Handle(InitializePromotionDataCommand request, CancellationToken cancellationToken)
    {
        // Promotion shares the employee's PK (one-to-one) and is created together with the employee
        // (status Pending/Unverified, not Active). Look it up by Id only — including soft-deleted
        // rows — otherwise the Create below would fail with a duplicate primary key.
        var existingPromotion = await _promotionRepository.GetQueryable()
            .IgnoreQueryFilters()
            .FirstOrDefaultAsync(p => p.Id == request.EmployeeId, cancellationToken);

        if (existingPromotion != null)
        {
            existingPromotion.JobDegreeId = request.JobDegreeId;
            existingPromotion.JobCategoryId = request.JobCategoryId;
            existingPromotion.DueDateDegree = request.DueDateDegree;
            // Re-derive the period start from the entered due date on the next calculation.
            existingPromotion.DegreeStartDate = null;
            existingPromotion.DueDateCategory = request.DueDateCategory;
            existingPromotion.LastAllowanceDate = request.LastAllowanceDate;
            existingPromotion.Note = "تهيئة بيانات أولية";
            existingPromotion.LastUpdateAt = DateTime.UtcNow;
            if (existingPromotion.IsDeleted)
            {
                existingPromotion.IsDeleted = false;
                existingPromotion.DeletedAt = null;
                existingPromotion.DeletedBy = null;
            }

            if (!_promotionRepository.Update(existingPromotion))
                return ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
        }
        else
        {
            var newPromotion = new Promotion
            {
                Id = request.EmployeeId,
                JobDegreeId = request.JobDegreeId,
                JobCategoryId = request.JobCategoryId,
                DueDateDegree = request.DueDateDegree,
                DueDateCategory = request.DueDateCategory,
                LastAllowanceDate = request.LastAllowanceDate,
                Note = "تهيئة بيانات أولية",
                StatusId = Status.Active
            };

            await _promotionRepository.Create(newPromotion, cancellationToken);
        }

        return SuccessMessage.Create.ToSuccessMessage(true);
    }
}
