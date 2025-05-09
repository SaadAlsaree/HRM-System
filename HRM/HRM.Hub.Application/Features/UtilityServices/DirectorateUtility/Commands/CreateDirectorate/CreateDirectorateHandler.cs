using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.DirectorateUtility.Commands.CreateDirectorate
{
    public class CreateDirectorateHandler : CreateHandler<Directorates, CreateDirectorateCommend>, IRequestHandler<CreateDirectorateCommend, Response<bool>>
    {
        public CreateDirectorateHandler(IBaseRepository<Directorates> repositoryDirectorate)
            : base(repositoryDirectorate) { }

        protected override Expression<Func<Directorates, bool>> ExistencePredicate(CreateDirectorateCommend request) => x => x.Name == request.Name;

        protected override Directorates MapToEntity(CreateDirectorateCommend request)
        {
            return new Directorates
            {
                Name = request.Name,
                ShortKey = request.ShortKey
            };
        }

        public async Task<Response<bool>> Handle(CreateDirectorateCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
