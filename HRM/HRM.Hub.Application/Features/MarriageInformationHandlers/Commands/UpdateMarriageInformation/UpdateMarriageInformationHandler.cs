namespace HRM.Hub.Application.Features.MarriageInformationHandlers.Commands.UpdateMarriageInformation
{
    public class UpdateMarriageInformationHandler :
            UpdateHandler<MarriageInformation, UpdateMarriageInformationCommend>,
            IRequestHandler<UpdateMarriageInformationCommend, Response<bool>>
    {
        public UpdateMarriageInformationHandler(IBaseRepository<MarriageInformation> repositoryMarriageInformation)
            : base(repositoryMarriageInformation)
        {
        }

        public override Expression<Func<MarriageInformation, bool>>
            EntityPredicate(UpdateMarriageInformationCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateMarriageInformationCommend request,
            CancellationToken cancellationToken)
        {
            request.FullName = $"{request.FirstName} {request.SecondName} {request.ThirdName} {request.SurName}".Trim();
            return await HandleBase(request, cancellationToken);
        }
    }
}