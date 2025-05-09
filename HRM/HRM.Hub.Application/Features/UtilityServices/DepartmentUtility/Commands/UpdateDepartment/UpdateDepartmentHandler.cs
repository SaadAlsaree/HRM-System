using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.DepartmentUtility.Commands.UpdateDepartment
{
    public class UpdateDepartmentHandler :
        UpdateHandler<Departments, UpdateDepartmentCommend>,
        IRequestHandler<UpdateDepartmentCommend, Response<bool>>
    {
        public UpdateDepartmentHandler(IBaseRepository<Departments> repositoryDepartment)
            : base(repositoryDepartment)
        {
        }

        public override Expression<Func<Departments, bool>>
            EntityPredicate(UpdateDepartmentCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateDepartmentCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}