using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.TypeOfAssignmentUtility.Commands.CreateTypeOfAssignment
{
    public class CreateTypeOfAssignmentHandler : CreateHandler<TypeOfAssignment, CreateTypeOfAssignmentCommend>, IRequestHandler<CreateTypeOfAssignmentCommend, Response<bool>>
    {
        public CreateTypeOfAssignmentHandler(IBaseRepository<TypeOfAssignment> repositoryTypeOfAssignment)
            : base(repositoryTypeOfAssignment) { }

        protected override Expression<Func<TypeOfAssignment, bool>> ExistencePredicate(CreateTypeOfAssignmentCommend request) => x => x.Name == request.Name;

        protected override TypeOfAssignment MapToEntity(CreateTypeOfAssignmentCommend request)
        {
            return new TypeOfAssignment
            {
                Name = request.Name,
                
            };
        }

        public async Task<Response<bool>> Handle(CreateTypeOfAssignmentCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
