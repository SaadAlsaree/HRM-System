using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Create;

namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Commands.CreateDepartment
{
    public class CreateDepartmentHandler  : CreateHandler<Departments, CreateDepartmentCommend>, IRequestHandler<CreateDepartmentCommend, Response<bool>>
    {
        public CreateDepartmentHandler(IBaseRepository<Departments> repositoryDepartment)
            : base(repositoryDepartment) { }

        protected override Expression<Func<Departments, bool>> ExistencePredicate(CreateDepartmentCommend request) => x => x.Name == request.Name;

        protected override Departments MapToEntity(CreateDepartmentCommend request)
        {
            return new Departments
            {
                DirectorateId = request.DirectorateId,
                SubDirectorateId = request.SubDirectorateId,
                Name = request.Name,
                ShortKey = request.ShortKey
            };
        }

        public async Task<Response<bool>> Handle(CreateDepartmentCommend request, CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}
