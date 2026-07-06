
namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.RenewAffiliation
{
    public class RenewAffiliationHandler : IRequestHandler<RenewAffiliationCommand, Response<bool>>
    {
        private readonly IBaseRepository<Domain.Entities.Affiliation> _repositoryAffiliation;

        public RenewAffiliationHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
        {
            _repositoryAffiliation = repositoryAffiliation ?? throw new ArgumentNullException(nameof(repositoryAffiliation));
        }

        public async Task<Response<bool>> Handle(RenewAffiliationCommand request, CancellationToken cancellationToken)
        {
            var entity = await _repositoryAffiliation.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

            if (entity == null)
                return ErrorsMessage.NotFoundData.ToErrorMessage(false);

            // Close the old entry
            entity.StatusId = Status.InActive;
            entity.LastUpdateBy = request.LastUpdateBy;
            entity.LastUpdateAt = DateTime.Now;
            await _repositoryAffiliation.UpdateEntity(x => x.Id == request.Id, entity, cancellationToken);

            // Create a new entry with updated dates and incremented renewal
            var newAffiliation = new Domain.Entities.Affiliation
            {
                EmployeeId = entity.EmployeeId,
                TypeOfAssignmentId = entity.TypeOfAssignmentId,
                OrderNo = request.NewOrderNo ?? entity.OrderNo,
                OrderDate = request.NewOrderDate ?? entity.OrderDate,
                IssuingAuthority = entity.IssuingAuthority,
                Ministry = entity.Ministry,
                AssignmentSite = entity.AssignmentSite,
                OriginalEntity = entity.OriginalEntity,
                ReasonForJoining = entity.ReasonForJoining,
                DurationMonths = request.NewDurationMonths ?? entity.DurationMonths,
                FromDate = entity.ToDate,
                ToDate = request.NewToDate,
                MaxRenewals = entity.MaxRenewals,
                RenewalCount = entity.RenewalCount + 1,
                Note = request.Note ?? entity.Note,
                CreateBy = request.LastUpdateBy
            };

            var resp = await _repositoryAffiliation.Create(newAffiliation, cancellationToken);

            return resp != null ? SuccessMessage.Update.ToSuccessMessage(true) : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
        }
    }
}
