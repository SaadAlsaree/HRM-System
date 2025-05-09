using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfSeniorityUtility.Commands.CreateTypeOfSeniority
{
    public class CreateTypeOfSeniorityHandler : CreateHandler<TypeOfSeniority, CreateTypeOfSeniorityCommend>, IRequestHandler<CreateTypeOfSeniorityCommend, Response<bool>>
    {
        public CreateTypeOfSeniorityHandler(IBaseRepository<TypeOfSeniority> repositoryTypeOfSeniority)
            : base(repositoryTypeOfSeniority) { }

        protected override Expression<Func<TypeOfSeniority, bool>> ExistencePredicate(CreateTypeOfSeniorityCommend request) => x => x.Name == request.Name;

        protected override TypeOfSeniority MapToEntity(CreateTypeOfSeniorityCommend request)
        {
            return new TypeOfSeniority
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfSeniorityCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
