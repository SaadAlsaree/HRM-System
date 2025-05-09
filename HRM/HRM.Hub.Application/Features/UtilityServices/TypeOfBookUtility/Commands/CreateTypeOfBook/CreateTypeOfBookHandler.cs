using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfBookUtility.Commands.CreateTypeOfBook
{
    public class CreateTypeOfBookHandler : CreateHandler<TypeOfBook, CreateTypeOfBookCommend>, IRequestHandler<CreateTypeOfBookCommend, Response<bool>>
    {
        public CreateTypeOfBookHandler(IBaseRepository<TypeOfBook> repositoryTypeOfBook)
            : base(repositoryTypeOfBook) { }

        protected override Expression<Func<TypeOfBook, bool>> ExistencePredicate(CreateTypeOfBookCommend request) => x => x.Name == request.Name;

        protected override TypeOfBook MapToEntity(CreateTypeOfBookCommend request)
        {
            return new TypeOfBook
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfBookCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
