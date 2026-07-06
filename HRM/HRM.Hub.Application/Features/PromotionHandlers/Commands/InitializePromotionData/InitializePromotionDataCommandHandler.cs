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
        var existingPromotion = await _promotionRepository.GetQueryable()
            .FirstOrDefaultAsync(p => p.Id == request.EmployeeId && p.StatusId == Status.Active, cancellationToken);

        if (existingPromotion != null)
        {
            existingPromotion.JobDegreeId = request.JobDegreeId;
            existingPromotion.JobCategoryId = request.JobCategoryId;
            existingPromotion.DueDateDegree = request.DueDateDegree;
            existingPromotion.DueDateCategory = request.DueDateCategory;
            existingPromotion.LastAllowanceDate = request.LastAllowanceDate;
            existingPromotion.Note = "تهيئة بيانات أولية";

            _promotionRepository.Update(existingPromotion);
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
