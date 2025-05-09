using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfServiceUtility.Commands.CreateTypeOfService
{
    public class CreateTypeOfServiceHandler : CreateHandler<TypeOfService, CreateTypeOfServiceCommend>, IRequestHandler<CreateTypeOfServiceCommend, Response<bool>>
    {
        public CreateTypeOfServiceHandler(IBaseRepository<TypeOfService> repositoryTypeOfService)
            : base(repositoryTypeOfService) { }

        protected override Expression<Func<TypeOfService, bool>> ExistencePredicate(CreateTypeOfServiceCommend request) => x => x.Name == request.Name;

        protected override TypeOfService MapToEntity(CreateTypeOfServiceCommend request)
        {
            return new TypeOfService
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfServiceCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
