
namespace HRM.Hub.Application.Features.AffiliationHandlers.Commands.EndAffiliation
{
    public class EndAffiliationHandler : IRequestHandler<EndAffiliationCommand, Response<bool>>
    {
        private readonly IBaseRepository<Domain.Entities.Affiliation> _repositoryAffiliation;

        public EndAffiliationHandler(IBaseRepository<Domain.Entities.Affiliation> repositoryAffiliation)
        {
            _repositoryAffiliation = repositoryAffiliation ?? throw new ArgumentNullException(nameof(repositoryAffiliation));
        }

        public async Task<Response<bool>> Handle(EndAffiliationCommand request, CancellationToken cancellationToken)
        {
            var entity = await _repositoryAffiliation.Find(x => x.Id == request.Id, cancellationToken: cancellationToken);

            if (entity == null)
                return ErrorsMessage.NotFoundData.ToErrorMessage(false);

            entity.EndOrderNo = request.EndOrderNo;
            entity.EndOrderDate = request.EndOrderDate;
            entity.Note = request.Note;
            entity.StatusId = Status.InActive;
            entity.LastUpdateBy = request.LastUpdateBy;
            entity.LastUpdateAt = DateTime.Now;

            var resp = await _repositoryAffiliation.UpdateEntity(x => x.Id == request.Id, entity, cancellationToken);

            return resp ? SuccessMessage.Update.ToSuccessMessage(true) : ErrorsMessage.FailOnUpdate.ToErrorMessage(false);
        }
    }
}
