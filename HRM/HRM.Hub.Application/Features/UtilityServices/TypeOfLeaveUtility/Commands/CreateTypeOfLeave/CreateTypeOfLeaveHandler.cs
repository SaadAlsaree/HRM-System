using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfLeaveUtility.Commands.CreateTypeOfLeave
{
    public class CreateTypeOfLeaveHandler : CreateHandler<TypeOfLeave, CreateTypeOfLeaveCommend>, IRequestHandler<CreateTypeOfLeaveCommend, Response<bool>>
    {
        public CreateTypeOfLeaveHandler(IBaseRepository<TypeOfLeave> repositoryTypeOfLeave)
            : base(repositoryTypeOfLeave) { }

        protected override Expression<Func<TypeOfLeave, bool>> ExistencePredicate(CreateTypeOfLeaveCommend request) => x => x.Name == request.Name;

        protected override TypeOfLeave MapToEntity(CreateTypeOfLeaveCommend request)
        {
            return new TypeOfLeave
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfLeaveCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
