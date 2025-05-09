using HRM.Hub.Application.Features.UtilityServices.AcademicCertificateTypeUtility.Commands.UpdateAcademicCertificateType;
using HRM.Hub.Application.Features.UtilityServices.BaseUtility.Command.Update;

namespace HRM.Hub.Application.Features.EmployeePositionHandlers.Commands.UpdateEmployeePosition
{
    public class UpdateEmployeePositionHandler :
        UpdateHandler<EmployeePosition, UpdateEmployeePositionCommend>,
        IRequestHandler<UpdateEmployeePositionCommend, Response<bool>>
    {
        public UpdateEmployeePositionHandler(IBaseRepository<EmployeePosition> repositoryEmployeePosition)
            : base(repositoryEmployeePosition)
        {
        }

        public override Expression<Func<EmployeePosition, bool>>
            EntityPredicate(UpdateEmployeePositionCommend request) =>
            x => x.Id == request.Id;

        public async Task<Response<bool>> Handle(UpdateEmployeePositionCommend request,
            CancellationToken cancellationToken)
        {
            return await HandleBase(request, cancellationToken);
        }
    }
}