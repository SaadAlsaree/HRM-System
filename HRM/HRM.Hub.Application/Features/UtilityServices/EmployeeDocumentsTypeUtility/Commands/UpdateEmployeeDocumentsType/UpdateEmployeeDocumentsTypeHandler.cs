using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.UtilityServices.EmployeeDocumentsTypeUtility.Commands.UpdateEmployeeDocumentsType
{
    public class UpdateEmployeeDocumentsTypeHandler :
        UpdateHandler<EmployeeDocumentsType, UpdateEmployeeDocumentsTypeCommend>,
        IRequestHandler<UpdateEmployeeDocumentsTypeCommend, Response<bool>>
    {
        public UpdateEmployeeDocumentsTypeHandler(IBaseRepository<EmployeeDocumentsType> repositoryEmployeeDocumentsType)
            : base(repositoryEmployeeDocumentsType)
        {
        }

        public override Expression<Func<EmployeeDocumentsType, bool>>
            EntityPredicate(UpdateEmployeeDocumentsTypeCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateEmployeeDocumentsTypeCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}