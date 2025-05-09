using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.LawUtility.Commands.CreateLaw
{
    public class CreateLawHandler : CreateHandler<Laws, CreateLawCommend>, IRequestHandler<CreateLawCommend, Response<bool>>
    {
        public CreateLawHandler(IBaseRepository<Laws> repositoryLaw)
            : base(repositoryLaw) { }

        protected override Expression<Func<Laws, bool>> ExistencePredicate(CreateLawCommend request) => x => x.Name == request.Name;

        protected override Laws MapToEntity(CreateLawCommend request)
        {
            return new Laws
            {
                Name = request.Name
            };
        }

        public async Task<Response<bool>> Handle(CreateLawCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
