using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.GovernorateUtility.Commands.CreateGovernorate
{
    public class CreateGovernorateHandler : CreateHandler<Governorate, CreateGovernorateCommend>, IRequestHandler<CreateGovernorateCommend, Response<bool>>
    {
        public CreateGovernorateHandler(IBaseRepository<Governorate> repositoryGovernorate)
            : base(repositoryGovernorate) { }

        protected override Expression<Func<Governorate, bool>> ExistencePredicate(CreateGovernorateCommend request) => x => x.Name == request.Name;

        protected override Governorate MapToEntity(CreateGovernorateCommend request)
        {
            return new Governorate
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreateGovernorateCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
