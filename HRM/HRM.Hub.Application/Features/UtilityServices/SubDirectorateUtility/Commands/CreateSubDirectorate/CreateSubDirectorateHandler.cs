using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.SubDirectorateUtility.Commands.CreateSubDirectorate
{
    public class CreateSubDirectorateHandler : CreateHandler<SubDirectorates, CreateSubDirectorateCommend>, IRequestHandler<CreateSubDirectorateCommend, Response<bool>>
    {
        public CreateSubDirectorateHandler(IBaseRepository<SubDirectorates> repositorySubDirectorate)
            : base(repositorySubDirectorate) { }

        protected override Expression<Func<SubDirectorates, bool>> ExistencePredicate(CreateSubDirectorateCommend request) => x => x.Name == request.Name;

        protected override SubDirectorates MapToEntity(CreateSubDirectorateCommend request)
        {
            return new SubDirectorates
            {
                DirectorateId = request.DirectorateId,
                Name = request.Name,
                ShortKey = request.ShortKey,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateSubDirectorateCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
